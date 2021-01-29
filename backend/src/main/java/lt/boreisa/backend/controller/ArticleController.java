package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.repository.ArticleRepo;
import lt.boreisa.backend.service.ArticleMapService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ArticleController {

    @Autowired
    private ArticleMapService mapService;

    @GetMapping("/articles")
    public List<ArticleDTO> getArticles () {
        return mapService.getAllArticles();
    }
}
