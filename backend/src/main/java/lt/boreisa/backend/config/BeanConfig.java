package lt.boreisa.backend.config;

import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

import java.text.ParseException;

@Configuration
public class BeanConfig {

    @Bean
    public RestTemplate restTemplate() {
    return new RestTemplate();
    }

    @Bean
    ModelMapper modelMapper() {
        return new ModelMapper();
    }


    /**

    //    Conversion from Entity to Data Transfer Object

    private ArticleDTO convertToDTO (Article article) {
        ArticleDTO articleDTO = modelMapper.map(Article, ArticleDTO.class);
        return articleDTO;
    }

    //    Conversion from Data Transfer Object to Entity
    private Article convertToEntity(ArticleDTO articleDTO) throws ParseException {
        Article article = modelMapper.map(ArticleDTO, Article.class);
        return article;

    article.stream()
    .map(this::convertToDTO)
    .collect(Collectors.toList());
    }
    */
}
