package fit.service;

import fit.exception.DuplicatedUserException;
import fit.exception.InvalidCpfException;
import fit.exception.InvalidEmailException;
import fit.exception.InvalidCpfException;
import fit.exception.UserFieldEmptyException;
import fit.exception.UserNotFoundException;
import fit.model.Pet;
import fit.model.User;
import fit.repository.PetRepository;
import fit.repository.UserRepository;
import java.util.List;
import java.util.Random;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.lang.StringBuilder;

@Service
public class UserServiceImpl implements UserService {
  private UserRepository userRepository;
  private PetRepository petRepository;
  private EmailService emailService;

  @Autowired
  public UserServiceImpl(UserRepository userRepository,
      PetRepository petRepository,
      EmailService emailService) {
    this.userRepository = userRepository;
    this.petRepository = petRepository;
    this.emailService = emailService;
  }

  @Override
  public void saveUser(User user) throws DuplicatedUserException, UserFieldEmptyException, InvalidEmailException,
      InvalidCpfException {

    if (user.getCpf().isBlank() || user.getEmail().isBlank() || user.getName().isBlank() ||
        user.getPix().isBlank() || user.getPassword().isBlank()) {
      throw new UserFieldEmptyException("Todos os campos são obrigatórios.");
    }

    if (!isValidEmail(user.getEmail())) {
      throw new InvalidEmailException("Email Inválido.");
    }

    if (!isValidCPF(user.getCpf())) {
      throw new InvalidCpfException("CPF Inválido.");
    }

    if (userRepository.checkIfUserAlreadyExists(user.getEmail(), user.getCpf(), 0)) {
      throw new DuplicatedUserException("Usuário já existe");
    }

    user.setPassword(hashPassword(user.getPassword()));

    userRepository.save(user);
  }

  @Override
  public User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException {
    if (email.isBlank() || password.isBlank()) {
      throw new UserNotFoundException("E-mail ou senha vazios");
    }
    User user = userRepository.findByUserEmailAndPassword(email, hashPassword(password));
    if (user == null) {
      throw new UserNotFoundException("E-mail ou senha inválidos");
    }
    return user;
  }

  @Override
  public Boolean checkIfUserAlreadyExists(String email, String cpf, int idUserException) {
    return userRepository.checkIfUserAlreadyExists(email, cpf, idUserException);
  }

  @Override
  public User getUserById(int idUser) throws UserNotFoundException {
    User user = userRepository.findById(idUser);
    if (user == null) {
      throw new UserNotFoundException("Usuário não encontrado");
    }

    return user;
  }

  @Override
  public void updateUser(User user) throws DuplicatedUserException, UserNotFoundException,
      UserFieldEmptyException, InvalidEmailException, InvalidCpfException {
    User oldDataUser = getUserById(user.getId());

    if (user.getCpf().isBlank() || user.getEmail().isBlank() || user.getName().isBlank() ||
        user.getPix().isBlank() || user.getPassword().isBlank()) {
      throw new UserFieldEmptyException("Todos os campos são obrigatórios.");
    }

    if (!isValidEmail(user.getEmail())) {
      throw new InvalidEmailException("Email Inválido.");
    }

    if (!isValidCPF(user.getCpf())) {
      throw new InvalidCpfException("CPF Inválido.");
    }

    if (userRepository.checkIfUserAlreadyExists(user.getEmail(), user.getCpf(), user.getId())) {
      throw new DuplicatedUserException("Outro usuário já está cadastrado com esse e-mail/CPF");
    }

    if (!(oldDataUser.getPassword().equals(user.getPassword()))) {
      user.setPassword(hashPassword(user.getPassword()));
    }

    userRepository.update(user);

  }

  @Override
  public User deleteUser(int userId) throws UserNotFoundException {
    User user = getUserById(userId);

    userRepository.delete(user);
    List<Pet> petList = petRepository.findAll(userId);

    petList.forEach(pet -> petRepository.delete(pet));

    return user;

  }

  @Override
  public void recoverPassword(String email) throws UserNotFoundException {
    User user = userRepository.findByUserEmail(email);

    if (user == null) {
      throw new UserNotFoundException("Usuário não encontrado");
    }

    String newPassword = generateNumericPassword();

    user.setPassword(hashPassword(newPassword));

    userRepository.update(user);

    emailService.sendEmail(email, "Recuperação de senha - Dindo&Pet",
        "Caro usuário, a sua nova senha no aplicativo Dindo&Pet é: " + newPassword);

  }

  private static String generateNumericPassword() {
    int passwordLength = 6;
    Random random = new Random();
    StringBuilder password = new StringBuilder();

    for (int i = 0; i < passwordLength; i++) {
      int digit = random.nextInt(10);
      password.append(digit);
    }

    return password.toString();
  }

  private String hashPassword(String password) {
    try {
      MessageDigest digest = MessageDigest.getInstance("SHA-256");
      byte[] hash = digest.digest(password.getBytes(StandardCharsets.UTF_8));
      StringBuilder hexString = new StringBuilder();
      for (byte b : hash) {
        String hex = Integer.toHexString(0xff & b);
        if (hex.length() == 1) {
          hexString.append('0');
        }
        hexString.append(hex);
      }
      return hexString.toString();
    } catch (NoSuchAlgorithmException e) {
      throw new RuntimeException("Ocorreu um erro durante o hash da senha.", e);
    }
  }

  private boolean isValidEmail(String email) {
    final String EMAIL_REGEX = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
    Pattern EMAIL_PATTERN = Pattern.compile(EMAIL_REGEX);

    Matcher matcher = EMAIL_PATTERN.matcher(email);
    return matcher.matches();
  }

  private boolean isValidCPF(String cpf) {
    cpf = cpf.replaceAll("[^0-9]", "");

    if (cpf.length() != 11) {
      return false;
    }

    if (cpf.matches("(\\d)\\1{10}")) {
      return false;
    }

    int sum = 0;
    for (int i = 0; i < 9; i++) {
      sum += (cpf.charAt(i) - '0') * (10 - i);
    }
    int digit1 = 11 - (sum % 11);
    if (digit1 >= 10) {
      digit1 = 0;
    }

    sum = 0;
    for (int i = 0; i < 10; i++) {
      sum += (cpf.charAt(i) - '0') * (11 - i);
    }
    int digit2 = 11 - (sum % 11);
    if (digit2 >= 10) {
      digit2 = 0;
    }

    return (digit1 == (cpf.charAt(9) - '0')) && (digit2 == (cpf.charAt(10) - '0'));
  }
}
