package lt.boreisa.backend.service;

import lt.boreisa.backend.model.DTO.UserRegisterDTO;
import lt.boreisa.backend.model.Role;
import lt.boreisa.backend.model.User;
import lt.boreisa.backend.repository.RoleRepo;
import lt.boreisa.backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {

    private final UserRepo userRepo;
    private final RoleRepo roleRepo;
    private PasswordEncoder passwordEncoder;

    public UserService(UserRepo userRepo, RoleRepo roleRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
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
        Role role = roleRepo.findById(1L).get();
        user.addRole(role);
        return userRepo.save(user);
    }
}
