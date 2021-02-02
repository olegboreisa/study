package lt.boreisa.backend.model.DTO;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;;

import java.util.Date;
import java.util.List;

@Data
@JsonIgnoreProperties
public class ArticleDTO {

    private Long id;

    private String title;

    private Date date;

    private String text;

    private List<Long> categoryIds;

}
