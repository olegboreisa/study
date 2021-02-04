package lt.boreisa.backend.service;

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
}
