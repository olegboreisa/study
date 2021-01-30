package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.Category;
import lt.boreisa.backend.model.DTO.CategoryDTO;
import lt.boreisa.backend.repository.CategoryRepo;
import lt.boreisa.backend.service.CategoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
