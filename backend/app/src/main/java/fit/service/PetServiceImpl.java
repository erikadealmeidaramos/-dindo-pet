package fit.service;

import fit.exception.PetFieldEmptyException;
import fit.model.Pet;
import fit.repository.PetRepository;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PetServiceImpl implements PetService {
  private PetRepository petRepository;
  private ImageUploader imageUploader;

  @Autowired
  public PetServiceImpl(PetRepository petRepository,
      ImageUploader imageUploader) {
    this.petRepository = petRepository;
    this.imageUploader = imageUploader;
  }

  @Override
  public void savePet(Pet pet, MultipartFile file) throws PetFieldEmptyException,
      IOException, URISyntaxException {

    if (pet.getName().isBlank() || pet.getImage().isBlank()
        || pet.getUser() == null || pet.getStatus() == null ||
        pet.getBreed() == null || pet.getCash() == null) {
      throw new PetFieldEmptyException("Todos os campos são obrigatórios.");
    }

    if (file != null) {
      pet.setImage(imageUploader.upload(file));
    }
    petRepository.save(pet);
  }

  @Override
  public void updatePet(Pet pet, MultipartFile file) throws PetFieldEmptyException,
      IOException, URISyntaxException {
    if (pet.getName().isBlank() || pet.getImage().isBlank()
        || pet.getStatus() == null ||
        pet.getBreed() == null || pet.getCash() == null
        || pet.getId() == 0) {
      throw new PetFieldEmptyException("Todos os campos são obrigatórios.");
    }

    if (file != null) {
      pet.setImage(imageUploader.upload(file));
    }

    petRepository.update(pet);
  }

  @Override
  public List<Pet> allPets(int idUser) {
    return petRepository.findAll(idUser);
  }

  @Override
  public Pet deletePet(int idPet) {
    Pet pet = petRepository.findById(idPet);

    if (pet != null)
      petRepository.delete(pet);

    return pet;
  }

}