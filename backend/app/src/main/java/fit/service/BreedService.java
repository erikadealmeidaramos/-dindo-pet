package fit.service;

import fit.model.Breed;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface BreedService {

  public List<Breed> allBreeds();

}