package fit.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Pet {
    @JsonProperty("id")
    private int id;
    @JsonProperty("name")
    private String name;
    @JsonProperty("image")
    private String image;
    @JsonProperty("status")
    private Boolean status;
    @JsonProperty("cash")
    private Float cash;
    @JsonProperty("user")
    private User user;
    @JsonProperty("breed")
    private Breed breed;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public User getUser() {
        return user;
    }

    public void setIduser(User user) {
        this.user = user;
    }

    public Breed getBreed() {
        return breed;
    }

    public void setIdBreed(Breed breed) {
        this.breed = breed;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    public Float getCash() {
        return cash;
    }

    public void setCash(Float cash) {
        this.cash = cash;
    }

    public Pet(int id, String name, String image, Boolean status, Float cash, User user, Breed breed) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.status = status;
        this.cash = cash;
        this.user = user;
        this.breed = breed;
    }

    public Pet() {
    }

}
