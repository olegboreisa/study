package lt.boreisa.backend.repository;

import lt.boreisa.backend.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
//[THIS IS TO COMMUNICATE WITH DATABASE]
@Repository
public interface ArticleRepo extends JpaRepository <Article, Long> {



    @Query(
            value = "Select * FROM article WHERE category_name = ?1",
            nativeQuery = true
    )
    List <Article> findArticlesByCategory(String category);
}