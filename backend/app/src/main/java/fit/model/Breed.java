package fit.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Breed {
    @JsonProperty("id")
    private int id;
    @JsonProperty("specie")
    private Specie specie;
    @JsonProperty("description")
    private String description;

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

    public Specie getSpecie() {
        return specie;
    }

    public void setSpecie(Specie specie) {
        this.specie = specie;
    }

    public Breed(int id, String description, Specie specie) {
        this.id = id;
        this.description = description;
        this.specie = specie;
    }

    public Breed() {
    }

}
