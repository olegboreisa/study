package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class ArticleController {

    @Autowired
    private ArticleService articleService;

    @GetMapping("/articles/{pageNo}/{pageSize}")
    public List<ArticleDTO> getArticles (@PathVariable int pageNo, @PathVariable int pageSize) {
        return articleService.getAllArticles(pageNo, pageSize);
    }
}
