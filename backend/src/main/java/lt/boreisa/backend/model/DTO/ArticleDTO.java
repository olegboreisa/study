package lt.boreisa.backend.model.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lt.boreisa.backend.model.Category;;
import java.util.Date;

@Data
@JsonIgnoreProperties
public class ArticleDTO {

    private Long id;

    private Date date;

    private String title;

    private String text;

    private CategoryDTO category;

}
