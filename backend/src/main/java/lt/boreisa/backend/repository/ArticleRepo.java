package lt.boreisa.backend.repository;

import lt.boreisa.backend.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ArticleRepo extends JpaRepository <Article, Long> {
}

// [HERE WE COMMUNICATE WITH DATABASE]
