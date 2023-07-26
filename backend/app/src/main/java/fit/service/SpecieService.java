package fit.service;

import fit.model.Specie;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public interface SpecieService {

  public List<Specie> allSpecies();

}