package fit.repository;

import fit.model.User;
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

@Repository
public class UserRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	public void save(User user) {
		try {
			if (checkIfUserAlreadyExists(user.getEmail(), user.getCpf(), 0)) {
				throw new RuntimeException("Já existe um usuário com esse E-mail ou CPF!");
			}

			String sql = "INSERT INTO User (nameUser, email, password, cpf, pix) VALUES (:name, :email, :password, :cpf, :pix)";
			SqlParameterSource parameters = new MapSqlParameterSource()
					.addValue("name", user.getName())
					.addValue("email", user.getEmail())
					.addValue("password", user.getPassword())
					.addValue("cpf", user.getCpf())
					.addValue("pix", user.getPix());
			namedParameterJdbcTemplate.update(sql, parameters);
		} catch (DataAccessException e) {
			throw new RuntimeException("Ocorreu um erro ao executar a query ", e);
		}
	}

	public void update(User user) {
		try {
			if (user.getEmail() != null && user.getPassword() != null) {

				String sql = "UPDATE User SET nameUser = :nameUser, email = :email, password = :password, cpf = :cpf, pix = :pix WHERE idUser = :idUser";
				SqlParameterSource parameters = new MapSqlParameterSource()
						.addValue("nameUser", user.getName())
						.addValue("email", user.getEmail())
						.addValue("password", user.getPassword())
						.addValue("cpf", user.getCpf())
						.addValue("pix", user.getPix())
						.addValue("idUser", user.getId());
				namedParameterJdbcTemplate.update(sql, parameters);
			}
		} catch (DataAccessException e) {
			throw new RuntimeException("Ocorreu um erro ao executar a query: ", e);
		}
	}

	public void delete(User user) {
		try {
			String sql = "DELETE FROM User WHERE idUser = :idUser";
			SqlParameterSource parameters = new MapSqlParameterSource()
					.addValue("idUser", user.getId());
			namedParameterJdbcTemplate.update(sql, parameters);
		} catch (DataAccessException e) {
			throw new RuntimeException("Ocorreu um erro ao executar a query: ", e);
		}
	}

	public User findById(int id) {
		User user = null;
		try {
			user = jdbcTemplate.query("SELECT * FROM User WHERE idUser = ?",
					new PreparedStatementSetter() {
						public void setValues(PreparedStatement ps) throws SQLException {
							ps.setInt(1, id);
						}
					},
					new ResultSetExtractor<User>() {
						public User extractData(ResultSet rs) throws SQLException, DataAccessException {
							if (rs.next()) {
								User user = new User(
										rs.getInt("idUser"),
										rs.getString("nameUser"),
										rs.getString("email"),
										rs.getString("password"),
										rs.getString("cpf"),
										rs.getString("pix"));
								return user;
							} else {
								return null;
							}
						}
					});
		} catch (DataAccessException e) {
			throw new RuntimeException("Ocorreu um erro ao executar a query: ", e);
		}

		return user;
	}

	public User findByUserEmailAndPassword(String email, String password) {
		User user = null;
		try {
			user = jdbcTemplate.query("SELECT * FROM User WHERE email = ? AND password = ?",
					new PreparedStatementSetter() {
						public void setValues(PreparedStatement ps) throws SQLException {
							ps.setString(1, email);
							ps.setString(2, password);
						}
					},
					new ResultSetExtractor<User>() {
						public User extractData(ResultSet rs) throws SQLException, DataAccessException {
							if (rs.next()) {
								User user = new User(
										rs.getInt("idUser"),
										rs.getString("nameUser"),
										rs.getString("email"),
										rs.getString("password"),
										rs.getString("cpf"),
										rs.getString("pix"));
								return user;
							} else {
								return null;
							}
						}
					});
		} catch (DataAccessException e) {
			throw new RuntimeException("Ocorreu um erro ao executar a query: ", e);
		}

		return user;
	}

	public User findByUserEmail(String email) {
		User user = null;
		try {
			user = jdbcTemplate.query("SELECT * FROM User WHERE email = ?",
					new PreparedStatementSetter() {
						public void setValues(PreparedStatement ps) throws SQLException {
							ps.setString(1, email);
						}
					},
					new ResultSetExtractor<User>() {
						public User extractData(ResultSet rs) throws SQLException, DataAccessException {
							if (rs.next()) {
								User user = new User(
										rs.getInt("idUser"),
										rs.getString("nameUser"),
										rs.getString("email"),
										rs.getString("password"),
										rs.getString("cpf"),
										rs.getString("pix"));
								return user;
							} else {
								return null;
							}
						}
					});
		} catch (DataAccessException e) {
			throw new RuntimeException("An error occurred while executing the query: ", e);
		}

		return user;
	}

	public Boolean checkIfUserAlreadyExists(String email, String cpf, int idUserException) {
		try {
			String sql = "SELECT COUNT(*) FROM User WHERE (email = ? OR cpf = ?) AND idUser <> ?";
			Integer count = jdbcTemplate.queryForObject(sql, Integer.class, email, cpf, idUserException);
			return count != null && count > 0;
		} catch (DataAccessException e) {
			throw new RuntimeException("Ocorreu um erro ao executar a query: ", e);
		}
	}
}
