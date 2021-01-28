package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.repository.ArticleRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticleController {

    private ArticleRepo articleRepo;

    public ArticleController(ArticleRepo articleRepo) {
        this.articleRepo = articleRepo;
    }

    @GetMapping("/category")
    public List<Article> getArticles () {
        return articleRepo.findAll();
    }

    @GetMapping("/category/{cat}")
    public List<Article> getArticle (@PathVariable String cat) {
        return articleRepo.findArticlesByCategory(cat);
    }


}
