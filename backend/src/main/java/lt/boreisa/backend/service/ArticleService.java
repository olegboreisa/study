package lt.boreisa.backend.service;

import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.repository.ArticleRepo;
import lt.boreisa.backend.repository.CategoryRepo;
import org.modelmapper.Converter;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.modelmapper.spi.MappingContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepo articleRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private ModelMapper modelMapper;

    private ArticleDTO convertToArticleDTO(Article article) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        ArticleDTO articleDTO = modelMapper.map(article, ArticleDTO.class);
        return articleDTO;
    }

    public Article convertToArticle (ArticleDTO articleDTO){
        Article article = new Article();
        article.setTitle(articleDTO.getTitle());
        article.setText(articleDTO.getText());
        article.setCategory(categoryRepo.findById(articleDTO.getCategory().getId()).orElseThrow());
        return article;
    }

    public Page<ArticleDTO> getAllArticles(Pageable pageable) {
        List<ArticleDTO> list = articleRepo.findAll(pageable)
                                                            .stream()
                                                            .map(this::convertToArticleDTO)
                                                            .collect(Collectors.toList());
        return new PageImpl<>(list);
    }

    public ArticleDTO getSingleArticle (Long id) {
        Article article = articleRepo.findById(id).orElseThrow();
        ArticleDTO articleDTO = convertToArticleDTO(article);
        return articleDTO;
    }

    public void saveArticle (ArticleDTO articleDto) {
        Article article = convertToArticle(articleDto);
        articleRepo.save(article);
    }

    public void deleteSingleArticle (Long id){
        articleRepo.deleteById(id);
    }

    public void updateSingleArticle(Long id, ArticleDTO articleDTO) {
        Article article = articleRepo.findById(id).orElseThrow();
        article.setTitle(articleDTO.getTitle());
        article.setText(articleDTO.getText());
        article.setCategory(categoryRepo.findById(articleDTO.getCategory().getId()).orElseThrow());
        articleRepo.save(article);
    }

    // [FIND ALL ARTICLES BY CATEGORY]
    public List<ArticleDTO> getAllArticlesByCategory (Long id) {
        return ((List<Article>) articleRepo
                .findArticlesByCategory(id))
                .stream()
                .map(this::convertToArticleDTO)
                .collect(Collectors.toList());
    }
}



/**
 * Loose
 * The Loose matching strategy allows for source properties to be loosely matched to destination properties by requiring that only the last destination property in a hierarchy be matched. The following rules apply:
 *
 * Tokens can be matched in any order
 * The last destination property name must have all tokens matched
 * The last source property name must have at least one token matched
 * The loose matching strategy is ideal to use for source and destination object models with property hierarchies that are very dissimilar. It may result in a higher level of ambiguous matches being detected, but for well-known object models it can be a quick alternative to defining
 */
