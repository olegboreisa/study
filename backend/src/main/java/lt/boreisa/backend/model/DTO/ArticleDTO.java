package lt.boreisa.backend.model.DTO;

import lombok.Data;;

import java.util.Date;

@Data
public class ArticleDTO {

    private Long id;

    private String title;

    private Date creation_date;

    private String text;

    private CategoryDTO categoryName;
}
