package fit.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import fit.exception.InvalidTokenException;
import fit.exception.MissingHeaderException;
import fit.model.Breed;
import fit.service.BreedService;
import io.jsonwebtoken.JwtException;

@RestControllerAdvice
@RequestMapping("api/v1/breed")
public class BreedController {

  private BreedService breedService;

  @Autowired
  public BreedController(BreedService breedService) {
    this.breedService = breedService;
  }

  @GetMapping("/")
  public ResponseEntity<Object> getBreed() throws MissingHeaderException, InvalidTokenException, JwtException {

    List<Breed> breedsList = breedService.allBreeds();

    return new ResponseEntity<>(breedsList, HttpStatus.OK);
  }

}