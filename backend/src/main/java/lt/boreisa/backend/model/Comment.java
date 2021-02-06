package lt.boreisa.backend.model;

import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "comment")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    @Column(name = "posted_date")
    private LocalDate date;

    @NotBlank
    @Column(name = "comment_text")
    private String commentText;

    @ManyToOne
    @JoinColumn(name = "article_id")
    private Article article;
}
