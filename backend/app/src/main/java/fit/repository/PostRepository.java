package fit.repository;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementSetter;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import fit.model.Post;

@Repository
public class PostRepository {

  @Autowired
  private JdbcTemplate jdbcTemplate;
  @Autowired
  private NamedParameterJdbcTemplate namedParameterJdbcTemplate;
  @Autowired
  PetRepository petRepository;

  public void save(Post post) {
    try {
      String sql = "INSERT INTO Post (picturePost, postDescription, paymentvoucher, Pet_idPet) VALUES (:picturePost, :postDescription, :paymentvoucher, :Pet_idPet)";
      SqlParameterSource parameters = new MapSqlParameterSource()
          .addValue("picturePost", post.getImage())
          .addValue("postDescription", post.getDescription())
          .addValue("paymentvoucher", post.getType())
          .addValue("Pet_idPet", post.getPet().getId());
      namedParameterJdbcTemplate.update(sql, parameters);
    } catch (DataAccessException e) {
      throw new RuntimeException("An error occurred while executing the query (INSERT Post): ", e);
    }
  }

  public List<Post> findByType(int paymentVoucher, int idPet) {
    List<Post> postList = new ArrayList<Post>();

    try {
      jdbcTemplate.query("SELECT * FROM Post WHERE paymentvoucher = ? AND (Pet_idPet = ? OR ? = 0)",

          new PreparedStatementSetter() {
            public void setValues(PreparedStatement ps) throws SQLException {
              ps.setInt(1, paymentVoucher);
              ps.setInt(2, idPet);
              ps.setInt(3, idPet);
            }
          },
          new ResultSetExtractor<List<Post>>() {
            public List<Post> extractData(ResultSet rs) throws SQLException, DataAccessException {

              while (rs.next()) {
                Post post = new Post(
                    rs.getInt("idPost"),
                    rs.getString("picturePost"),
                    rs.getString("postDescription"),
                    rs.getBoolean("paymentvoucher"),
                    petRepository.findById(rs.getInt("Pet_idPet")));
                postList.add(post);
              }
              return postList;
            }
          });
    } catch (DataAccessException e) {
      throw new RuntimeException("An error occurred while executing the query: ", e);
    }

    return postList;

  }

}
