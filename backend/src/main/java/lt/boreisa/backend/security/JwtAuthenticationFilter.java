package lt.boreisa.backend.security;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import lt.boreisa.backend.model.User;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Map;

import static lt.boreisa.backend.security.SecurityConstants.*;

/**
 * [Užklausų perėmimą. Pabandymą autentifikuoti asmenį] -> JwtAuthenticationFilter
 * [MES PERRAŠINĖJAM VIENĄ IŠ JAU EGZISTUOJANČIŲ FILTRŲ - UsernamePasswordAuthenticationFilter]
 */

public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {


    private JwtProvider jwtProvider;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtProvider jwtProvider) {
        super(authenticationManager);
        this.jwtProvider = jwtProvider;
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        try {
            // [CREATING USER TOKEN FOR AUTHENTICATION MANAGER]
            Map<String, String> credentials = new ObjectMapper().readValue(request.getReader(), new TypeReference<>() {
            });

            String username = credentials.get(USERNAME);
            String password = credentials.get(PASSWORD);

            new UsernamePasswordAuthenticationToken(username, password);

            return getAuthenticationManager().authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (Exception e) {
            throw new BadCredentialsException("Bad credentials");
        }
    }


    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {

        // [ATTACHING AUTHENTICATED USER INTO SECURITY CONTEXT TO CALL CONTROLLER]
        SecurityContextHolder.getContext().setAuthentication(authResult);

        // [CREATING AND CASTING USER FROM APPLICATION.PROPERTIES]
        User user = (User) authResult.getPrincipal();

        // [TOKEN CREATION BY USER DETAILS]
        String jwtToken = jwtProvider.createToken(user);

        // [AUTHORIZATION TYPE BEARER BECAUSE WE RETURN TOKEN]
        response.addHeader(AUTHORIZATION_HEADER, AUTHORIZATION_HEADER_PREFIX + jwtToken);

        // [WE DO NOT WANT TO STOP THE SECURITY PROCESS THEREFORE TO CONTINUE CHAIN]
        chain.doFilter(request, response);
    }
}
