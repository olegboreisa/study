package lt.boreisa.backend.service;

import lt.boreisa.backend.model.DTO.UserRegisterDTO;
import lt.boreisa.backend.model.User;
import lt.boreisa.backend.repository.UserRepo;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService {

    private UserRepo userRepo;

    public UserService(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return userRepo.findWithRolesByUsername(username).
                orElseThrow();
    }

    public User getUserFromRegistration(UserRegisterDTO userRegisterDTO) {
        User user = new User();
        user.setUsername(userRegisterDTO.getUsername());
        user.setPassword(userRegisterDTO.getPassword());
        user.setMatchPassword(userRegisterDTO.getMatchPassword());
        user.setCountry(userRegisterDTO.getCountry());
        user.setPhoneNum(userRegisterDTO.getPhoneNum());
        return userRepo.save(user);
    }
}
