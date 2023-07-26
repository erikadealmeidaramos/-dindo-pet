package fit.service;

import java.io.IOException;
import java.time.OffsetDateTime;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.azure.core.util.BinaryData;
import com.azure.core.util.Context;
import com.azure.storage.blob.BlobClient;
import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.models.BlobHttpHeaders;
import com.azure.storage.blob.models.BlobRequestConditions;
import com.azure.storage.blob.options.BlobParallelUploadOptions;

@Service
public class ImageUploaderImpl implements ImageUploader {

  @Autowired
  private BlobServiceClient blobServiceClient;

  @Value("${spring.cloud.azure.storage.blob.container-name}")
  private String containerName;

  @Override
  public String upload(MultipartFile file) throws IOException {

    String blobName = OffsetDateTime.now().toEpochSecond() + "-" + file.getOriginalFilename();

    BlobHttpHeaders jsonHeaders = new BlobHttpHeaders()
        .setContentType(MediaType.IMAGE_JPEG_VALUE);
    BinaryData data = BinaryData.fromStream(file.getInputStream(), file.getSize());
    BlobParallelUploadOptions options = new BlobParallelUploadOptions(data)
        .setRequestConditions(new BlobRequestConditions()).setHeaders(jsonHeaders);

    BlobClient blobClient = blobServiceClient.getBlobContainerClient(containerName).getBlobClient(blobName);
    blobClient.uploadWithResponse(options, null, Context.NONE);
    return blobName;
  }
}
