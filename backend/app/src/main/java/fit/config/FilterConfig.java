package fit.config;

import fit.filter.JwtFilter;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
  @Bean
  public FilterRegistrationBean<JwtFilter> jwtFilter() {
    List<String> exclusions = new ArrayList<>(
        Arrays.asList("/api/v1/user/login", "/api/v1/user/register", "/api/v1/user/recoverpassword"));

    FilterRegistrationBean<JwtFilter> filter = new FilterRegistrationBean<JwtFilter>();
    filter.setFilter(new JwtFilter(exclusions));
    return filter;
  }
}