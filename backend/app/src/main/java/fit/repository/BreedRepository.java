package fit.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.ArrayList;

import fit.model.Breed;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

@Repository
public class BreedRepository {

  @Autowired
  private JdbcTemplate jdbcTemplate;
  @Autowired
  private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
  @Autowired
  private SpecieRepository specieRepository;

  public Breed findById(int id) {
    Breed breed = null;
    try {
      breed = jdbcTemplate.query("SELECT * FROM Breed WHERE idBreed = ?",
          new PreparedStatementSetter() {
            public void setValues(PreparedStatement ps) throws SQLException {
              ps.setInt(1, id);
            }
          },
          new ResultSetExtractor<Breed>() {
            public Breed extractData(ResultSet rs) throws SQLException, DataAccessException {
              if (rs.next()) {
                Breed breed = new Breed(
                    rs.getInt("idBreed"),
                    rs.getString("descriptionBreed"),
                    specieRepository.findById(rs.getInt("Species_idSpecies")));

                return breed;
              } else {
                return null;
              }
            }
          });
    } catch (DataAccessException e) {
      throw new RuntimeException("An error occurred while executing the query: ", e);
    }

    return breed;
  }

  public List<Breed> ListAll() {
    List<Breed> breedList = new ArrayList<Breed>();

    try {
      jdbcTemplate.query("SELECT * FROM Breed ",

          new ResultSetExtractor<List<Breed>>() {
            public List<Breed> extractData(ResultSet rs) throws SQLException, DataAccessException {

              while (rs.next()) {
                Breed breed = new Breed(
                    rs.getInt("idBreed"),
                    rs.getString("descriptionBreed"),
                    specieRepository.findById(rs.getInt("Species_idSpecies")));
                breedList.add(breed);
              }
              return breedList;
            }
          });
    } catch (DataAccessException e) {
      throw new RuntimeException("An error occurred while executing the query: ", e);
    }

    return breedList;

  }

}
