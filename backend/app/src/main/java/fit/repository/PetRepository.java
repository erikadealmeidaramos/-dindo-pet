package fit.repository;

import fit.model.Pet;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Repository
public class PetRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private BreedRepository breedRepository;

	public void save(Pet pet) {
		try {
			String sql = "INSERT INTO Pet (namePet, picturePet, status, cash, User_idUser, Breed_idBreed) VALUES (:namePet, :picturePet, :status, :cash, :User_idUser, :Breed_idBreed)";
			SqlParameterSource parameters = new MapSqlParameterSource()
					.addValue("namePet", pet.getName())
					.addValue("picturePet", pet.getImage())
					.addValue("status", pet.getStatus())
					.addValue("cash", pet.getCash())
					.addValue("User_idUser", pet.getUser().getId())
					.addValue("Breed_idBreed", pet.getBreed().getId());
			namedParameterJdbcTemplate.update(sql, parameters);
		} catch (DataAccessException e) {
			throw new RuntimeException("An error occurred while executing the query (INSERT PET): ", e);
		}
	}

	public void update(Pet pet) {
		try {
			String sql = "UPDATE Pet SET namePet = :namePet, picturePet = :picturePet, status = :status, cash = :cash, Breed_idBreed = :Breed_idBreed WHERE idPet = :idPet";
			SqlParameterSource parameters = new MapSqlParameterSource()
					.addValue("namePet", pet.getName())
					.addValue("picturePet", pet.getImage())
					.addValue("status", pet.getStatus())
					.addValue("cash", pet.getCash())
					.addValue("Breed_idBreed", pet.getBreed().getId())
					.addValue("idPet", pet.getId());
			namedParameterJdbcTemplate.update(sql, parameters);
		} catch (DataAccessException e) {
			throw new RuntimeException("An error occurred while executing the query: ", e);
		}
	}

	public List<Pet> findAll(int idUser) {
		List<Pet> petList = new ArrayList<Pet>();

		try {
			jdbcTemplate.query("SELECT * FROM Pet WHERE User_idUser = ?",

					new PreparedStatementSetter() {
						public void setValues(PreparedStatement ps) throws SQLException {
							ps.setInt(1, idUser);
						}
					},
					new ResultSetExtractor<List<Pet>>() {
						public List<Pet> extractData(ResultSet rs) throws SQLException, DataAccessException {

							while (rs.next()) {
								Pet pet = new Pet(
										rs.getInt("idPet"),
										rs.getString("namePet"),
										rs.getString("picturePet"),
										rs.getBoolean("status"),
										rs.getFloat("cash"),
										userRepository.findById(rs.getInt("User_idUser")),
										breedRepository.findById((rs.getInt("Breed_idBreed"))));
								petList.add(pet);
							}
							return petList;
						}
					});
		} catch (DataAccessException e) {
			throw new RuntimeException("An error occurred while executing the query: ", e);
		}

		return petList;

	}

	public Pet findById(int id) {
		Pet pet = null;

		try {
			pet = jdbcTemplate.query("SELECT * FROM Pet WHERE idPet = ?",

					new PreparedStatementSetter() {
						public void setValues(PreparedStatement ps) throws SQLException {
							ps.setInt(1, id);
						}
					},
					new ResultSetExtractor<Pet>() {
						public Pet extractData(ResultSet rs) throws SQLException, DataAccessException {
							if (rs.next()) {
								Pet pet = new Pet(
										rs.getInt("idPet"),
										rs.getString("namePet"),
										rs.getString("picturePet"),
										rs.getBoolean("status"),
										rs.getFloat("cash"),
										userRepository.findById(rs.getInt("User_idUser")),
										breedRepository.findById((rs.getInt("Breed_idBreed"))));

								return pet;
							} else {
								return null;
							}
						}
					});
		} catch (DataAccessException e) {
			throw new RuntimeException("An error occurred while executing the query: ", e);
		}

		return pet;

	}

	public void delete(Pet pet) {

		try {
			jdbcTemplate.update("DELETE FROM Post WHERE Pet_idPet = ?", pet.getId());
			jdbcTemplate.update("DELETE FROM Pet WHERE idPet = ?", pet.getId());
		} catch (DataAccessException e) {
			throw new RuntimeException("An error occurred while executing the query: ", e);
		}

	}

}
