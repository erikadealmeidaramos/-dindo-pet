package fit.service;

import fit.model.Post;
import fit.repository.PostRepository;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class PostServiceImpl implements PostService {
  private PostRepository postRepository;
  private ImageUploader imageUploader;

  @Autowired
  public PostServiceImpl(PostRepository postRepository,
      ImageUploader imageUploader) {
    this.postRepository = postRepository;
    this.imageUploader = imageUploader;
  }

  @Override
  public void savePost(Post post, MultipartFile file) throws IOException, URISyntaxException {

    post.setImage(imageUploader.upload(file));

    postRepository.save(post);

  }

  @Override
  public List<Post> findByType(int paymentVoucher, int idPet) {
    return postRepository.findByType(paymentVoucher, idPet);
  }

}