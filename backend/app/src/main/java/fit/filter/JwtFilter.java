package fit.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import org.springframework.http.HttpStatus;
import org.springframework.web.filter.GenericFilterBean;
import org.springframework.web.server.ResponseStatusException;

import fit.exception.InvalidTokenException;
import fit.exception.MissingHeaderException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class JwtFilter extends GenericFilterBean {

  private final List<String> exclusions;

  public JwtFilter(List<String> exclusions) {
    this.exclusions = exclusions;
  }

  @Override
  public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
      throws IOException, ServletException, InvalidTokenException, MissingHeaderException {

    final HttpServletRequest request = (HttpServletRequest) servletRequest;
    final HttpServletResponse response = (HttpServletResponse) servletResponse;
    final String authHeader = request.getHeader("authorization");
    String requestUri = request.getRequestURI();

    try {
      if ("OPTIONS".equals(request.getMethod())) {
        response.setStatus(HttpServletResponse.SC_OK);
        filterChain.doFilter(request, response);
        return;
      } else {

        // Verificar se a URL atual começa com alguma das exclusões
        for (String exclusion : exclusions) {
          if (requestUri.startsWith(exclusion)) {
            // Se a URL atual começar com uma das exclusões, passar a solicitação para o
            // próximo filtro na cadeia
            filterChain.doFilter(request, response);
            return;
          }
        }

        if (authHeader == null) {
          throw new MissingHeaderException("Header is missing");
        }
        if (!authHeader.startsWith("Bearer ")) {
          throw new InvalidTokenException("Invalid token. Bearer missing");
        }
      }

      final String token = authHeader.substring(7);
      Claims claims = Jwts.parser().setSigningKey("secret").parseClaimsJws(token).getBody();
      request.setAttribute("claims", claims);

      Map<String, String[]> parameters = servletRequest.getParameterMap();
      for (String name : parameters.keySet()) {
        String[] values = parameters.get(name);
        if (values.length > 0) {
          request.setAttribute(name, values[0]);
        }
      }

      filterChain.doFilter(request, response);

    } catch (JwtException e) {
      throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, e.getMessage(), e);
    } catch (MissingHeaderException | InvalidTokenException e) {
      throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, e.getMessage(), e);
    } catch (Exception e) {
      throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getMessage(), e);
    }
  }

}