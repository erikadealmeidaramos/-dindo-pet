package fit.config;

import com.azure.storage.blob.BlobServiceClient;
import com.azure.storage.blob.BlobServiceClientBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AzureConfig {

    @Value("${spring.cloud.azure.storage.blob.uri}")
    private String uri;

    @Value("${spring.cloud.azure.storage.blob.container-name}")
    private String containerName;

    @Bean
    public BlobServiceClient blobServiceClient() {
        BlobServiceClient blobServiceClient = new BlobServiceClientBuilder().endpoint(uri)
                .buildClient();
        blobServiceClient.getBlobContainerClient(containerName).createIfNotExists();
        return blobServiceClient;
    }
}