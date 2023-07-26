package fit.service;

import fit.model.Breed;
import fit.repository.BreedRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BreedServiceImpl implements BreedService {

  private BreedRepository breedRepository;

  @Autowired
  public BreedServiceImpl(BreedRepository breedRepository) {
    this.breedRepository = breedRepository;
  }

  @Override
  public List<Breed> allBreeds() {
    return breedRepository.ListAll();
  }

}