package lt.boreisa.backend.service;

import lt.boreisa.backend.model.Article;
import lt.boreisa.backend.model.Category;
import lt.boreisa.backend.model.DTO.ArticleDTO;
import lt.boreisa.backend.model.DTO.CategoryDTO;
import lt.boreisa.backend.repository.CategoryRepo;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class CategoryService {

    @Autowired
    private CategoryRepo categoryRepo;

    @Autowired
    private ModelMapper modelMapper;

    private CategoryDTO convertToCategoryDTO(Category category) {
        modelMapper.getConfiguration()
                .setMatchingStrategy(MatchingStrategies.LOOSE);
        CategoryDTO categoryDTO = modelMapper.map(category, CategoryDTO.class);
        return categoryDTO;
    }

    public Category convertToCategory (CategoryDTO categoryDTO) {
        Category category = new Category();
        BeanUtils.copyProperties(categoryDTO, category, Category.class);
        return category;
    }

    public List<CategoryDTO> getAllCategories() {
        return ((List<Category>) categoryRepo
                .findAll())
                .stream()
                .map(this::convertToCategoryDTO)
                .collect(Collectors.toList());
    }

    public Category saveCategory (Category category) {
        return categoryRepo.save(category);
    }

    public void deleteCategory (Long id) {
        categoryRepo.deleteById(id);
    }
}
