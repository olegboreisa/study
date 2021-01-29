package lt.boreisa.backend.model.DTO;

import lombok.Data;
import lt.boreisa.backend.model.DTO.CategoryDTO;

import java.util.Date;

@Data
public class ArticleDTO {

    private Long id;

    private String title;

    private Date creation_date;

    private CategoryDTO categoryName;
}
