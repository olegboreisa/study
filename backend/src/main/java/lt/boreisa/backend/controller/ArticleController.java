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

    @GetMapping("/art")
    public List<Article> getArticles () {
        return articleRepo.findAll();
    }

    @GetMapping("/art/{id}")
    public Article getArticle (@PathVariable Long id) {
        return articleRepo.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid id"));
    }
}
