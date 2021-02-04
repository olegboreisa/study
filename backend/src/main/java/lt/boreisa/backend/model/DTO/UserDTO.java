package lt.boreisa.backend.model.DTO;

import lt.boreisa.backend.model.User;

import java.util.Set;
import java.util.stream.Collectors;

public class UserDTO {

    private Long id;

    private String username;

    private Set<String> roles;

    public UserDTO(User user) {
        this.id = user.getId();
        this.username = user.getUsername();
        this.roles = user.getRoles().stream()
                .map(role -> role.getRoleName())
                .collect(Collectors.toSet());
    }
}
