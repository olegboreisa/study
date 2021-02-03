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

    @OneToMany(mappedBy = "category")
    private List<Article> article;
}

/**
 * Relationships may be bidirectional or unidirectional. A bidirectional relationship has both an owning side and an inverse (non-owning) side. A unidirectional relationship has only an owning side.
 *
 * The inverse side of bidirectional relationship must refer to its owning side by use of mappedBy. The mappedBy element designates the property or field in the entity that is the owner of the relationship.
 *
 * Here, the value of mappedBy is the name of the association-mapping attribute on the owning side. With this, we have now established a bidirectional association between our Article and Category entities
 */