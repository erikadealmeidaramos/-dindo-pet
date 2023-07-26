package fit.config;

import fit.model.User;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;

@Service
public class JwtGeneratorImpl implements JwtGeneratorInterface {
  @Value("${jwt.secret}")
  private String secret;
  @Value("${app.jwttoken.message}")
  private String message;

  @Override
  public Map<String, String> generateToken(User user) {
    JwtBuilder builder = Jwts.builder();

    Map<String, Object> claims = new HashMap<>();
    claims.put("role", "customer");
    claims.put("name", user.getName());
    claims.put("id", user.getId());
    builder.setClaims(claims);

    String jwtToken = "";
    jwtToken = builder.setSubject(Integer.toString(user.getId())).setIssuedAt(new Date())
        .signWith(SignatureAlgorithm.HS256, "secret")
        .setExpiration(new Date(System.currentTimeMillis() + 3600000))
        .setAudience("Dindo&Pet Mobile App").setIssuer("Dindo&Pet API")
        .setNotBefore(new Date())
        .setId(UUID.randomUUID().toString()).compact();

    Map<String, String> jwtTokenGen = new HashMap<>();
    jwtTokenGen.put("token", jwtToken);
    jwtTokenGen.put("message", message);
    return jwtTokenGen;
  }
}