package fit.service;

import fit.exception.PetFieldEmptyException;
import fit.model.Pet;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface PetService {
  public void savePet(Pet pet, MultipartFile file) throws PetFieldEmptyException,
      IOException, URISyntaxException;

  public void updatePet(Pet pet, MultipartFile file)
      throws PetFieldEmptyException, IOException, URISyntaxException;

  public List<Pet> allPets(int idUser);

  public Pet deletePet(int idPet);

}