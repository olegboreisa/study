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
    private Date creation_date;

    @Column(name = "module")
    private String module;

    @Column(name = "title")
    private String title;

    @Lob
    @Column(name = "text")
    private String text;
}
