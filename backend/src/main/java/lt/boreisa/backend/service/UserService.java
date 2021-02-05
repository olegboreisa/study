package lt.boreisa.backend.service;

import lt.boreisa.backend.model.DTO.UserRegisterDTO;
import lt.boreisa.backend.model.User;
import lt.boreisa.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private final UserRepo userRepo;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepo userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepo.findWithRolesByUsername(username).
                orElseThrow();
    }

    public User getUserFromRegistration(UserRegisterDTO userRegisterDTO) {
        User user = new User();
        String encodedPassword = passwordEncoder.encode(userRegisterDTO.getPassword());
        user.setUsername(userRegisterDTO.getUsername());
        user.setPassword(encodedPassword);
        user.setMatchPassword(encodedPassword);
        user.setCountry(userRegisterDTO.getCountry());
        user.setPhoneNum(userRegisterDTO.getPhoneNum());
        return userRepo.save(user);
    }
}
