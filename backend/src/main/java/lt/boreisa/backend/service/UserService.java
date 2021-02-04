package lt.boreisa.backend.service;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

// [ČIA IŠTRAUKIA USERĮ IŠ DUOMENŲ BAZĖS]
@Service
public class UserService implements UserDetailsService {

    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {
        return null;
    }
}
