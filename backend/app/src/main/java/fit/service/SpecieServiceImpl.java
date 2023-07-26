package fit.service;

import fit.model.Specie;
import fit.repository.SpecieRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpecieServiceImpl implements SpecieService {

  private SpecieRepository specieRepository;

  @Autowired
  public SpecieServiceImpl(SpecieRepository specieRepository) {
    this.specieRepository = specieRepository;
  }

  @Override
  public List<Specie> allSpecies() {
    return specieRepository.ListAll();
  }

}