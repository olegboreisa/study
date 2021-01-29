package lt.boreisa.backend.service;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.repository.ArticleRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleMapService {

    @Autowired
    private ArticleRepo articleRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<ArticleDTO> getAllArticles() {
        return ((List<Article>) articleRepo
                .findAll())
                .stream()
                .map(this::convertToArticleDTO)
                .collect(Collectors.toList());
    }

    private ArticleDTO convertToArticleDTO(Article article) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
                ArticleDTO articleDTO = modelMapper.map(article, ArticleDTO.class);
        return articleDTO;
    }
}
