package lt.boreisa.backend.controller;

import lombok.extern.slf4j.Slf4j;
import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/articles")
    public Page<ArticleDTO> getArticles (Pageable pageable) {
        return articleService.getAllArticles(pageable);
    }

    @GetMapping("/articles/{id}")
    public ArticleDTO getSingleArticle (@PathVariable Long id) {
        return articleService.getSingleArticle(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/articles/add")
    public void addArticle (@RequestBody ArticleDTO articleDTO) {
        articleService.saveArticle(articleDTO);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/articles/delete/{id}")
    public void deleteSingleArticle (@PathVariable Long id) {
        articleService.deleteSingleArticle(id);
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/articles/update/{id}")
    public void updateSingleArticle(@PathVariable Long id, @RequestBody ArticleDTO articleDTO){
        articleService.updateSingleArticle(id, articleDTO);
    }

    @GetMapping("/articles/categories/{id}")
    public List<ArticleDTO> getArticlesByCategory (@PathVariable Long id) {
        return articleService.getAllArticlesByCategory(id);
    }
}
