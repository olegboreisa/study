package lt.boreisa.backend.model;


import lombok.Data;
import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name ="category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="category_name")
    private String categoryName;

    @OneToMany(cascade = CascadeType.ALL)
    @Column(name = "article")
    private List<Article> article;
}
