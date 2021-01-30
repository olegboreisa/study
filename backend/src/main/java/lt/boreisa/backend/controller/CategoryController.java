package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.Category;
import lt.boreisa.backend.model.DTO.CategoryDTO;
import lt.boreisa.backend.repository.CategoryRepo;
import lt.boreisa.backend.service.CategoryService;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.*;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CategoryController {

    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("/categories")
    public List<CategoryDTO> getAllCategories () {
        return categoryService.getAllCategories();
    }

    @PostMapping("/add-category")
    public Category addCategory (@RequestBody CategoryDTO categoryDTO) {
        Category category = categoryService.convertToCategory(categoryDTO);
        return categoryService.saveCategory(category);
    }

    @DeleteMapping("/categories/delete/{id}")
    public void deleteCategory (@PathVariable Long id) {
        categoryService.deleteCategory(id);
    }
}
