package lt.boreisa.backend.repository;

import lt.boreisa.backend.model.Article;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
//[THIS IS TO COMMUNICATE WITH DATABASE]
@Repository
public interface ArticleRepo extends JpaRepository <Article, Long> {

    @Override
    Page<Article> findAll(Pageable pageable);

    @Query(
            value = "Select * FROM article WHERE category_id = :categoryId",
            nativeQuery = true
    )
    List <Article> findArticlesByCategory(@Param("categoryId") Long id);
}