package fit.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import fit.model.Specie;
import fit.model.Breed;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class SpecieRepository {

  @Autowired
  private JdbcTemplate jdbcTemplate;
  @Autowired
  private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

  public Specie findById(int id) {
    Specie specie = null;
    try {
      specie = jdbcTemplate.query("SELECT * FROM Species WHERE idSpecies = ?",
          new PreparedStatementSetter() {
            public void setValues(PreparedStatement ps) throws SQLException {
              ps.setInt(1, id);
            }
          },
          new ResultSetExtractor<Specie>() {
            public Specie extractData(ResultSet rs) throws SQLException, DataAccessException {
              if (rs.next()) {
                Specie specie = new Specie(
                    rs.getInt("idSpecies"),
                    rs.getString("descriptionSpecies"),
                    null);
                return specie;
              } else {
                return null;
              }
            }
          });
    } catch (DataAccessException e) {
      throw new RuntimeException("An error occurred while executing the query: ", e);
    }

    return specie;
  }

  public List<Specie> ListAll() {
    List<Specie> breedList = new ArrayList<Specie>();

    try {
      jdbcTemplate.query("SELECT * FROM Species",

          new ResultSetExtractor<List<Specie>>() {
            public List<Specie> extractData(ResultSet rs) throws SQLException, DataAccessException {

              while (rs.next()) {
                Specie specie = new Specie(
                    rs.getInt("idSpecies"),
                    rs.getString("descriptionSpecies"),
                    findBySpecieId((rs.getInt("idSpecies"))));
                breedList.add(specie);
              }
              return breedList;
            }
          });
    } catch (DataAccessException e) {
      throw new RuntimeException("An error occurred while executing the query: ", e);
    }

    return breedList;

  }

  public List<Breed> findBySpecieId(int id) {
    List<Breed> breedList = new ArrayList<Breed>();

    try {
      jdbcTemplate.query("SELECT * FROM Breed WHERE Species_idSpecies = ? ",
          new PreparedStatementSetter() {
            public void setValues(PreparedStatement ps) throws SQLException {
              ps.setInt(1, id);
            }
          },

          new ResultSetExtractor<List<Breed>>() {
            public List<Breed> extractData(ResultSet rs) throws SQLException, DataAccessException {

              while (rs.next()) {
                Breed breed = new Breed(
                    rs.getInt("idBreed"),
                    rs.getString("descriptionBreed"),
                    findById(rs.getInt("Species_idSpecies")));
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
