package lt.boreisa.backend.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;

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

    @ManyToOne
    private Category category;
}
