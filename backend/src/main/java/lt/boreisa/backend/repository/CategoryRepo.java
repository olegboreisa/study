package lt.boreisa.backend.repository;

import lt.boreisa.backend.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository <Category, Long> {
}
