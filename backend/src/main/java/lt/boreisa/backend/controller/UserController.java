package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.DTO.UserDTO;
import lt.boreisa.backend.model.User;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @PostMapping("/login")
    public UserDTO login (@AuthenticationPrincipal User user) {
        return new UserDTO(user);
    }
}
