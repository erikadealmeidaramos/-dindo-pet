package fit.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;

import fit.exception.InvalidTokenException;
import fit.exception.MissingHeaderException;
import fit.model.Post;
import fit.service.PostService;
import io.jsonwebtoken.JwtException;

@RestControllerAdvice
@RequestMapping("api/v1/post")
public class PostController {

  private PostService postService;

  @Autowired
  public PostController(PostService postService) {
    this.postService = postService;
  }

  @PostMapping(value = "/register", consumes = { "multipart/form-data" })
  public ResponseEntity<Post> postPet(@RequestPart("post") String postJson,
      @RequestPart("file") MultipartFile file)
      throws MissingHeaderException, InvalidTokenException, JwtException, IOException, URISyntaxException {

    ObjectMapper mapper = new ObjectMapper();
    Post post = mapper.readValue(postJson, Post.class);

    postService.savePost(post, file);

    return new ResponseEntity<Post>(post, HttpStatus.CREATED);
  }

  @GetMapping("/type/{paymentVoucher}/{idPet}")
  public ResponseEntity<List<Post>> get(@PathVariable int paymentVoucher, @PathVariable int idPet) {
    List<Post> post = postService.findByType(paymentVoucher, idPet);

    return new ResponseEntity<List<Post>>(post, HttpStatus.OK);
  }

}