package fit.config;

import fit.model.User;
import java.util.Map;

public interface JwtGeneratorInterface {
  Map<String, String> generateToken(User user);
}