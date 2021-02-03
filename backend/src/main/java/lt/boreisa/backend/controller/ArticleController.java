package lt.boreisa.backend.controller;

import lombok.extern.slf4j.Slf4j;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/articles/{pageNo}/{pageSize}")
    public List<ArticleDTO> getArticles (@PathVariable int pageNo, @PathVariable int pageSize) {
        return articleService.getAllArticles(pageNo, pageSize);
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
}
