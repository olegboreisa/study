package lt.boreisa.backend.service;

import lt.boreisa.backend.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public interface ArticleService extends JpaRepository<Article, Long> {
}
