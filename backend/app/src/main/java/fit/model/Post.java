package fit.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Post {
    @JsonProperty("id")
    private int id;
    @JsonProperty("picturePost")
    private String image;
    @JsonProperty("postDescription")
    private String description;
    @JsonProperty("paymentvoucher")
    private Boolean type;
    @JsonProperty("pet")
    private Pet pet;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getDescription() {
        return description;
    }

    public void setDesciption(String description) {
        this.description = description;
    }

    public Boolean getType() {
        return type;
    }

    public void setType(Boolean type) {
        this.type = type;
    }

    public Pet getPet() {
        return pet;
    }

    public void setPet(Pet pet) {
        this.pet = pet;
    }

    public Post(int id, String image, String description, Boolean type, Pet pet) {
        this.id = id;
        this.image = image;
        this.description = description;
        this.type = type;
        this.pet = pet;
    }

    public Post() {
    }

}
