package lt.boreisa.backend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.annotation.JsonAppend;
import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.Category;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.model.DTO.CategoryDTO;
import lt.boreisa.backend.repository.ArticleRepo;
import lt.boreisa.backend.repository.CategoryRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.io.DataInput;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ArticleService {

    @Autowired
    private ArticleRepo articleRepo;

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private ModelMapper modelMapper;

//    @Autowired
//    private JsonParsingService jsonParsingService;

//    @Autowired
//    ObjectMapper objectMapper;

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
//        List<Category> categoryList = new ArrayList<>();
////        List<CategoryDTO> categoryList = new ArrayList<>();
//        for (Category category : categoryRepo.findAll()) {
//            categoryList.add(category);
//        }
//


        return article;
    }

    public List<ArticleDTO> getAllArticles(int pageNo, int pageSize) {
        Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
        return ((Page<Article>) articleRepo
                .findAll(pageable))
                .stream()
                .map(this::convertToArticleDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public Article saveArticle (ArticleDTO articleDto) {
        Article article = convertToArticle(articleDto);

        for (Long categoryId : articleDto.getCategoryIds()) {
            Category category = categoryRepo.getOne(categoryId);
            article.addCategory(category);
        }




        return articleRepo.save(article);
    }
}
