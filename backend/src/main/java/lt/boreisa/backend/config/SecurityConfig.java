package lt.boreisa.backend.config;

import lt.boreisa.backend.security.JwtAuthenticationFilter;
import lt.boreisa.backend.security.JwtProvider;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {

        http
                .csrf().disable()
                .sessionManagement()
                    .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                    .and()
                .authorizeRequests()
                    .antMatchers("/login").permitAll()
                    .anyRequest().authenticated()
                    .and()
                .addFilter(new JwtAuthenticationFilter(authenticationManager(), new JwtProvider())); // [ATLIEKA AUTENTIFIKACIJĄ 1:57:00]


    }

    // [INSTEAD OF .login DEFAULT CONFIGURATION THAT WE USED IN PREVIOUS PROJECT BECAUSE BACK DOES NOT KNOW ABOUT FRONT AND VICE VERSA]
//    @Bean
//    @Override
//    public AuthenticationManager authenticationManager() throws Exception {
//        return super.authenticationManager();
//    }

}
