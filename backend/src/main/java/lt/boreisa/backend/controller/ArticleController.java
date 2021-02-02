package lt.boreisa.backend.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.extern.slf4j.Slf4j;
import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.Category;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.service.ArticleService;
import lt.boreisa.backend.service.CategoryService;
import lt.boreisa.backend.service.ParsingService;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/api")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

//    @Autowired
//    private CategoryService categoryService;

//    @Autowired
//    private ParsingService parsingService;

    @GetMapping("/articles/{pageNo}/{pageSize}")
    public List<ArticleDTO> getArticles (@PathVariable int pageNo, @PathVariable int pageSize) {
        return articleService.getAllArticles(pageNo, pageSize);
    }

    @PostMapping("/articles/add")
    public void addArticle (@RequestBody ArticleDTO articleDTO) {
        Article article = articleService.convertToArticle(articleDTO);
        articleService.saveArticle(article);
    }
}
