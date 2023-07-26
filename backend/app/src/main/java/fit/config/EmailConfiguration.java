package fit.config;

import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.validation.annotation.Validated;
import java.util.Properties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;

@Configuration
@ConfigurationProperties(prefix = "spring.mail")
@Validated
public class EmailConfiguration {

  @Autowired
  private Environment env;

  public String getMailHost() {
    return env.getProperty("SPRING_MAIL_HOST");
  }

  public Integer getMailPort() {
    return Integer.parseInt(env.getProperty("SPRING_MAIL_PORT"));
  }

  public String getMailUsername() {
    return env.getProperty("SPRING_MAIL_USERNAME");
  }

  public String getMailPassword() {
    return env.getProperty("SPRING_MAIL_PASSWORD");
  }

  @Bean
  public JavaMailSenderImpl javaMailSender() {
    JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
    mailSender.setHost(getMailHost());
    mailSender.setPort(getMailPort());
    mailSender.setUsername(getMailUsername());
    mailSender.setPassword(getMailPassword());

    Properties props = mailSender.getJavaMailProperties();
    props.put("mail.transport.protocol", "smtp");
    props.put("mail.smtp.auth", "true");
    props.put("mail.smtp.starttls.enable", "true");
    props.put("mail.debug", "true");

    return mailSender;
  }
}