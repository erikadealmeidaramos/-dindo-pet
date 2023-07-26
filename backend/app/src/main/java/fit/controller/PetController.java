package fit.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import fit.exception.InvalidTokenException;
import fit.exception.MissingHeaderException;
import fit.exception.PetFieldEmptyException;
import fit.model.Pet;
import fit.service.PetService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;

@RestControllerAdvice
@RequestMapping("api/v1/pet")
public class PetController {

  private PetService petService;

  @Autowired
  private HttpServletRequest request;

  @Autowired
  public PetController(PetService petService) {
    this.petService = petService;
  }

  @GetMapping("/")
  public ResponseEntity<Object> getPet() throws MissingHeaderException, InvalidTokenException, JwtException {

    Claims claims = (Claims) request.getAttribute("claims");

    int idUser = claims.get("id", Integer.class);

    List<Pet> petsList = petService.allPets(idUser);

    return new ResponseEntity<>(petsList, HttpStatus.OK);
  }

  @PostMapping(value = "/", consumes = { "multipart/form-data" })
  public ResponseEntity<Pet> postPet(@RequestPart("pet") String petJson,
      @RequestParam(value = "file", required = false) MultipartFile file)
      throws MissingHeaderException, InvalidTokenException, JwtException,
      PetFieldEmptyException, IOException, URISyntaxException {

    ObjectMapper mapper = new ObjectMapper();
    Pet pet = mapper.readValue(petJson, Pet.class);

    petService.savePet(pet, file);

    return new ResponseEntity<Pet>(pet, HttpStatus.CREATED);
  }

  @PutMapping(value = "/", consumes = { "multipart/form-data" })
  public ResponseEntity<Pet> updatePet(@RequestPart("pet") String petJson,
      @RequestParam(value = "file", required = false) MultipartFile file)
      throws MissingHeaderException, InvalidTokenException, JwtException,
      PetFieldEmptyException, IOException, URISyntaxException {

    ObjectMapper mapper = new ObjectMapper();
    Pet pet = mapper.readValue(petJson, Pet.class);

    petService.updatePet(pet, file);

    return new ResponseEntity<Pet>(pet, HttpStatus.ACCEPTED);
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Pet> delete(@PathVariable int id)
      throws MissingHeaderException, InvalidTokenException, JwtException {
    Pet pet = petService.deletePet(id);
    return new ResponseEntity<Pet>(pet, HttpStatus.ACCEPTED);
  }

}