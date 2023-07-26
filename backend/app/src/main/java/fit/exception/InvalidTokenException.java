package fit.exception;

import javax.servlet.ServletException;

public class InvalidTokenException extends ServletException {

  /**
   * 
   */
  private static final long serialVersionUID = 1L;

  public InvalidTokenException(String message) {
    super(message);
  }

}
