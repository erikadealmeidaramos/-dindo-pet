package fit.controller;

import fit.config.JwtGeneratorInterface;
import fit.exception.UserNotFoundException;
import fit.exception.DuplicatedUserException;
import fit.exception.InvalidCpfException;
import fit.exception.InvalidEmailException;
import fit.exception.InvalidTokenException;
import fit.exception.MissingHeaderException;
import fit.exception.UserFieldEmptyException;
import fit.model.User;
import fit.service.UserService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestControllerAdvice
@RequestMapping("api/v1/user")
public class UserController {
  private UserService userService;
  private JwtGeneratorInterface jwtGenerator;

  @Autowired
  private HttpServletRequest request;

  @Autowired
  public UserController(UserService userService, JwtGeneratorInterface jwtGenerator) {
    this.userService = userService;
    this.jwtGenerator = jwtGenerator;
  }

  @GetMapping("/")
  public ResponseEntity<User> get()
      throws MissingHeaderException, InvalidTokenException, JwtException, UserNotFoundException {
    Claims claims = (Claims) request.getAttribute("claims");

    int idUser = claims.get("id", Integer.class);

    User user = userService.getUserById(idUser);

    return new ResponseEntity<User>(user, HttpStatus.OK);
  }

  @PostMapping("/register")
  public ResponseEntity<User> postUser(@RequestBody User user) throws DuplicatedUserException,
      UserFieldEmptyException, InvalidEmailException, InvalidCpfException {
    userService.saveUser(user);
    return new ResponseEntity<User>(user, HttpStatus.CREATED);
  }

  @PutMapping("/")
  public ResponseEntity<User> updateUser(@RequestBody User user)
      throws DuplicatedUserException, UserNotFoundException, UserFieldEmptyException,
      InvalidEmailException, InvalidCpfException {
    userService.updateUser(user);
    return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<User> deleteUser(@PathVariable int id)
      throws UserNotFoundException {
    User user = userService.deleteUser(id);
    return new ResponseEntity<User>(user, HttpStatus.ACCEPTED);
  }

  @PostMapping("/login")
  public ResponseEntity<Object> loginUser(@RequestBody User user) throws UserNotFoundException {
    User userData = userService.getUserByEmailAndPassword(user.getEmail(), user.getPassword());
    return new ResponseEntity<Object>(jwtGenerator.generateToken(userData), HttpStatus.OK);
  }

  @PostMapping("/recoverpassword")
  public ResponseEntity recoverPassword(@RequestBody String email) throws UserNotFoundException {
    userService.recoverPassword(email);
    return new ResponseEntity<>(HttpStatus.OK);
  }

}