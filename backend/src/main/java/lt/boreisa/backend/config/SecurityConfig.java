package lt.boreisa.backend.config;

import lt.boreisa.backend.security.JwtAuthenticationFilter;
import lt.boreisa.backend.security.JwtAuthorizationFilter;
import lt.boreisa.backend.security.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private UserDetailsService userService;

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        // [ČIA FORMUOJAM SECURITY FILTRUS]

        http
                .csrf().disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .authorizeRequests()
//                    .antMatchers("/login").permitAll()
                    .anyRequest().permitAll()
                    .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager(), jwtProvider)) // [ATLIEKA AUTENTIFIKACIJĄ 1:57:00]
                .addFilter(new JwtAuthorizationFilter(authenticationManager(), jwtProvider));


    }

    // [INSTEAD OF .login DEFAULT CONFIGURATION THAT WE USED IN PREVIOUS PROJECT BECAUSE BACK DOES NOT KNOW ABOUT FRONT AND VICE VERSA]

    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        return super.authenticationManager();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(encoder());
    }

    @Bean
    public PasswordEncoder encoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

}
