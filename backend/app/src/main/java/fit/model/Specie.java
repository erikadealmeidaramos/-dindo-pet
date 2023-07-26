package fit.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Specie {
    @JsonProperty("id")
    private int id;
    @JsonProperty("description")
    private String description;
    @JsonProperty("breeds")
    private List<Breed> breeds;

    public List<Breed> getBreeds() {
        return breeds;
    }

    public void setBreeds(List<Breed> breeds) {
        this.breeds = breeds;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Specie(int id, String description, List<Breed> breeds) {
        this.id = id;
        this.description = description;
        this.breeds = breeds;
    }

    public Specie() {
    }

}
