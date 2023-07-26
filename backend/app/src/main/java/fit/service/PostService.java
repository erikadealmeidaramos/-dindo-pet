package fit.service;

import fit.model.Post;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface PostService {
  public void savePost(Post post, MultipartFile file) throws IOException, URISyntaxException;

  public List<Post> findByType(int paymentVoucher, int idPet);

}