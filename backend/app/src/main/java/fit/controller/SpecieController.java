package fit.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import fit.exception.InvalidTokenException;
import fit.exception.MissingHeaderException;
import fit.model.Specie;
import fit.service.SpecieService;
import io.jsonwebtoken.JwtException;

@RestControllerAdvice
@RequestMapping("api/v1/specie")
public class SpecieController {

  private SpecieService specieService;

  @Autowired
  public SpecieController(SpecieService specieService) {
    this.specieService = specieService;
  }

  @GetMapping("/")
  public ResponseEntity<Object> getSpecie() throws MissingHeaderException, InvalidTokenException, JwtException {

    List<Specie> speciesList = specieService.allSpecies();

    return new ResponseEntity<>(speciesList, HttpStatus.OK);
  }

}