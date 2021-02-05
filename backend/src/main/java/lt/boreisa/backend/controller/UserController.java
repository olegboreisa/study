package lt.boreisa.backend.controller;

import lt.boreisa.backend.model.DTO.UserDTO;
import lt.boreisa.backend.model.DTO.UserRegisterDTO;
import lt.boreisa.backend.model.User;
import lt.boreisa.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/login")
    public UserDTO login (@AuthenticationPrincipal User user) {
        return new UserDTO(user);
    }

    @PostMapping("/signup")
    public User register (@RequestBody @Valid UserRegisterDTO userRegisterDTO) {
        return userService.getUserFromRegistration(userRegisterDTO);
    }
}
