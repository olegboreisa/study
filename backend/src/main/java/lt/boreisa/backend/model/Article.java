package lt.boreisa.backend.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Data
@Table(name = "article")
public class Article {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    @Column(name = "creation_date")
    private Date date;

    @Column(name = "title")
    private String title;

    @Lob
    @Column(name = "text")
    private String text;

    @ManyToMany(mappedBy = "article")
    private List<Category> category = new ArrayList<>();

    public void addCategory(Category category) {
        this.category.add(category);
        category.getArticle().add(this);
    }
}
