package fit.exception.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.core.Ordered;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import fit.exception.DuplicatedUserException;
import fit.exception.InvalidTokenException;
import fit.exception.MissingHeaderException;
import fit.exception.UserCreationException;
import fit.exception.UserNotFoundException;
import fit.exception.UserFieldEmptyException;
import fit.exception.PetFieldEmptyException;
import fit.exception.InvalidEmailException;
import fit.exception.InvalidCpfException;
import fit.model.ApiError;

@ControllerAdvice
@Order(Ordered.HIGHEST_PRECEDENCE)
public class GlobalCustomExceptionHandler extends ResponseEntityExceptionHandler {

  private static final Logger logger = LoggerFactory.getLogger(GlobalCustomExceptionHandler.class);

  @ExceptionHandler(UserCreationException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleUserCreationException(UserCreationException ex) {
    logger.error("User creation Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, ex.getMessage());
  }

  @ExceptionHandler(UserNotFoundException.class)
  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ResponseBody
  public ApiError handleUserNotFoundException(UserNotFoundException ex) {
    logger.error("User not found Exception: ", ex);
    return new ApiError(HttpStatus.NOT_FOUND, ex.getMessage());
  }

  @ExceptionHandler(DuplicatedUserException.class)
  @ResponseStatus(HttpStatus.CONFLICT)
  @ResponseBody
  public ApiError handleDuplicatedUserException(DuplicatedUserException ex) {
    logger.error("Duplicated user exception: ", ex);
    return new ApiError(HttpStatus.CONFLICT, ex.getMessage());
  }

  @ExceptionHandler(InvalidTokenException.class)
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  @ResponseBody
  public ApiError handleInvalidTokenException(InvalidTokenException ex) {
    logger.error("Invalid token Exception: ", ex);
    return new ApiError(HttpStatus.UNAUTHORIZED, ex.getMessage());
  }

  @ExceptionHandler(MissingHeaderException.class)
  @ResponseStatus(HttpStatus.UNAUTHORIZED)
  @ResponseBody
  public ApiError handleMissingHeaderException(MissingHeaderException ex) {
    logger.error("Missing header Exception: ", ex);
    return new ApiError(HttpStatus.UNAUTHORIZED, ex.getMessage());
  }

  @ExceptionHandler(PetFieldEmptyException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public ApiError handlePetFieldEmptyException(PetFieldEmptyException ex) {
    logger.error("Pet register field empty execption: ", ex);
    return new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());
  }

  @ExceptionHandler(UserFieldEmptyException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public ApiError handleUserFieldEmptyException(UserFieldEmptyException ex) {
    logger.error("User register field empty execption: ", ex);
    return new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());
  }

  @ExceptionHandler(InvalidEmailException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public ApiError handleUserInvalidEmailException(InvalidEmailException ex) {
    logger.error("Invalid execption: ", ex);
    return new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());
  }

  @ExceptionHandler(InvalidCpfException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public ApiError handleUserInvalidCpfException(InvalidCpfException ex) {
    logger.error("Invalid execption: ", ex);
    return new ApiError(HttpStatus.BAD_REQUEST, ex.getMessage());
  }

}
