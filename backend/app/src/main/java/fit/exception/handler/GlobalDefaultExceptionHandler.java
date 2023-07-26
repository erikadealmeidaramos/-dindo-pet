package fit.exception.handler;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.annotation.Order;
import org.springframework.core.Ordered;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import javax.servlet.ServletException;
import java.io.IOException;
import java.sql.BatchUpdateException;
import java.sql.SQLException;
import java.sql.SQLNonTransientConnectionException;
import java.sql.SQLRecoverableException;
import java.sql.SQLSyntaxErrorException;
import java.sql.SQLTimeoutException;
import java.sql.SQLTransientConnectionException;
import java.sql.SQLTransientException;
import fit.model.ApiError;

import javax.servlet.http.HttpServletRequest;

@ControllerAdvice
@Order(Ordered.LOWEST_PRECEDENCE)
public class GlobalDefaultExceptionHandler extends ResponseEntityExceptionHandler {

  private static final Logger logger = LoggerFactory.getLogger(GlobalDefaultExceptionHandler.class);

  @ExceptionHandler(Exception.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleException(Exception ex, HttpServletRequest request) {
    logger.error("An error occurred: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred. Please try again later.");
  }

  @ExceptionHandler(ServletException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleServletException(ServletException ex, HttpServletRequest request) {
    logger.error("An error occurred: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred. Please try again later.");
  }

  @ExceptionHandler(value = { IllegalArgumentException.class, IllegalStateException.class })
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public ApiError handleBadRequest(RuntimeException ex) {
    logger.error("Bad Request: ", ex);
    return new ApiError(HttpStatus.BAD_REQUEST, "Bad Request: " + ex.getMessage());
  }

  @ExceptionHandler(NullPointerException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleNullPointerException(NullPointerException ex) {
    logger.error("NullPointerException: ", ex);

    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "An unexpected null pointer exception occurred.");
  }

  @ExceptionHandler(NumberFormatException.class)
  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ResponseBody
  public ApiError handleNumberFormatException(NumberFormatException ex) {
    logger.error("NumberFormatException: ", ex);
    return new ApiError(HttpStatus.BAD_REQUEST, "Invalid number format.");
  }

  @ExceptionHandler(IndexOutOfBoundsException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleIndexOutOfBoundsException(IndexOutOfBoundsException ex) {
    logger.error("IndexOutOfBoundsException: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "Index out of bounds.");
  }

  @ExceptionHandler(IOException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleIOException(IOException ex) {
    logger.error("IOException: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR, "An I/O exception occurred.");
  }

  @ExceptionHandler(SQLException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleSQLException(SQLException ex) {
    logger.error("SQL Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred while executing a SQL statement. Please try again later.");
  }

  @ExceptionHandler(BatchUpdateException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleBatchUpdateException(BatchUpdateException ex) {
    logger.error("Batch Update Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred while executing a batch update. Please try again later.");
  }

  @ExceptionHandler(SQLTimeoutException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleSQLTimeoutException(SQLTimeoutException ex) {
    logger.error("SQL Timeout Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred while waiting for a SQL statement to complete. Please try again later.");
  }

  @ExceptionHandler(SQLSyntaxErrorException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleSQLSyntaxErrorException(SQLSyntaxErrorException ex) {
    logger.error("SQL Syntax Error Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred while executing a SQL statement due to a syntax error. Please try again later.");
  }

  @ExceptionHandler(SQLNonTransientConnectionException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleSQLNonTransientConnectionException(SQLNonTransientConnectionException ex) {
    logger.error("SQL Non-Transient Connection Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred while attempting to connect to the database. Please try again later.");
  }

  @ExceptionHandler(SQLTransientConnectionException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleSQLTransientConnectionException(SQLTransientConnectionException ex) {
    logger.error("SQL Transient Connection Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred while attempting to connect to the database. Please try again later.");
  }

  @ExceptionHandler(SQLRecoverableException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleSQLRecoverableException(SQLRecoverableException ex) {
    logger.error("SQL Recoverable Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred that can be recovered from. Please try again later.");
  }

  @ExceptionHandler(SQLTransientException.class)
  @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
  @ResponseBody
  public ApiError handleSQLTransientException(SQLTransientException ex) {
    logger.error("SQL Transient Exception: ", ex);
    return new ApiError(HttpStatus.INTERNAL_SERVER_ERROR,
        "An error occurred that can be recovered from. Please try again later.");
  }

  @ExceptionHandler(ResponseStatusException.class)
  public ResponseEntity<Object> handleResponseStatusException(ResponseStatusException ex) {
    return new ResponseEntity<>(ex.getCause(), ex.getStatus());
  }

}