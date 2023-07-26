package fit.exception;

import javax.servlet.ServletException;

public class MissingHeaderException extends ServletException {

  /**
   * 
   */
  private static final long serialVersionUID = 1L;

  public MissingHeaderException(String message) {
    super(message);
  }

}
