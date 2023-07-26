package fit.service;

import java.io.IOException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public interface ImageUploader {
  public String upload(MultipartFile file) throws IOException;

}
