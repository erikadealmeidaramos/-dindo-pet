package fit.service;

import fit.exception.DuplicatedUserException;
import fit.exception.InvalidCpfException;
import fit.exception.InvalidEmailException;
import fit.exception.UserFieldEmptyException;
import fit.exception.UserNotFoundException;
import fit.model.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
  public void saveUser(User user) throws DuplicatedUserException, UserFieldEmptyException,
      InvalidEmailException, InvalidCpfException;

  public void updateUser(User user) throws DuplicatedUserException, UserNotFoundException, UserFieldEmptyException,
      InvalidEmailException, InvalidCpfException;

  public User deleteUser(int userId) throws UserNotFoundException;

  public User getUserByEmailAndPassword(String email, String password) throws UserNotFoundException;

  public Boolean checkIfUserAlreadyExists(String email, String cpf, int idUserException);

  public User getUserById(int idUser) throws UserNotFoundException;

  public void recoverPassword(String email) throws UserNotFoundException;
}