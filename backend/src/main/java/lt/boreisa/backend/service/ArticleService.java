package lt.boreisa.backend.service;

import com.fasterxml.jackson.databind.annotation.JsonAppend;
import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.repository.ArticleRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepo articleRepo;

    @Autowired
    private ModelMapper modelMapper;

    public List<ArticleDTO> getAllArticles(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);

        return ((Page<Article>) articleRepo
                .findAll(pageable))
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
