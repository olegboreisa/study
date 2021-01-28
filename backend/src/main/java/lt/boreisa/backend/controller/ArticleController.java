package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.repository.ArticleRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ArticleController {

    private ArticleRepo articleRepo;

    @GetMapping (path = "/articles")
    public List<Article> getArticles () {
        return articleRepo.findAll();
    }
}
