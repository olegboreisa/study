package lt.boreisa.backend.model;


import lombok.Data;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name ="category")
public class Category {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name ="category")
    private String category;

    @ManyToMany
    @JoinTable(
            name="category_article",
            joinColumns = @JoinColumn( name="category_id"),
            inverseJoinColumns = @JoinColumn( name="article_id")
    )
    private List<Article> article = new ArrayList<>();
}
