package lt.boreisa.backend.controller;

import lombok.extern.slf4j.Slf4j;
import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/articles")
    public List<ArticleDTO> getArticles () {
        return articleService.getAllArticles();
    }

    @GetMapping("/articles/{id}")
    public ArticleDTO getSingleArticle (@PathVariable Long id) {
        return articleService.getSingleArticle(id);
    }

    @PostMapping("/articles/add")
    public void addArticle (@RequestBody ArticleDTO articleDTO) {
        articleService.saveArticle(articleDTO);
    }

    @DeleteMapping("/articles/delete/{id}")
    public void deleteSingleArticle (@PathVariable Long id) {
        articleService.deleteSingleArticle(id);
    }

    @PutMapping("/articles/update/{id}")
    public void updateSingleArticle(@PathVariable Long id, @RequestBody ArticleDTO articleDTO){
        articleService.updateSingleArticle(id, articleDTO);
    }

    @GetMapping("/articles/categories/{id}")
    public List<ArticleDTO> getArticlesByCategory (@PathVariable Long id) {
        return articleService.getAllArticlesByCategory(id);
    }
}
