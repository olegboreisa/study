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
