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

    @Column(name ="category")
    private String category;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private List<Article> article;
}
