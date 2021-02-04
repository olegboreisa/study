package lt.boreisa.backend.security;

import io.jsonwebtoken.Jwt;
import org.apache.commons.lang3.StringUtils;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static lt.boreisa.backend.security.SecurityConstants.AUTHORIZATION_HEADER;
import static lt.boreisa.backend.security.SecurityConstants.AUTHORIZATION_HEADER_PREFIX;

public class JwtAuthorizationFilter extends BasicAuthenticationFilter {

    private JwtProvider jwtProvider;

    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, JwtProvider jwtProvider) {
        super(authenticationManager);
        this.jwtProvider = jwtProvider;
    }

    // [READ JWT TOKEN THAT COMES WITH HTTP HEADER AND PUT IT INTO SPRING SECURITY]
    // [JwtAuthorization Filter TAKE A JWT TOKEN AND WANTS TO DO SOMETHING WITH IT]
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {

        String authorizationHeader = request.getHeader(AUTHORIZATION_HEADER); //


        if (StringUtils.isNoneEmpty(authorizationHeader) && authorizationHeader.startsWith(AUTHORIZATION_HEADER_PREFIX)) {
            String jwt = authorizationHeader.replace(AUTHORIZATION_HEADER_PREFIX, "");

            Authentication authentication = jwtProvider.getAuthentication(jwt);

            if (authentication == null) {
                chain.doFilter(request, response);
                return;
            }

            SecurityContextHolder.getContext().setAuthentication(authentication);
            chain.doFilter(request, response);
        }
    }
}

// (33) [IŠSITRAUKIAM AUTORIZACIJOS HEADERĮ]
// (36) [PATIKRINIMAS AR JIS NETUŠČIAS IR PRASIDEDA SU PREFIXSU]
// (37) [DELETING JWT TOKEN PREFIX - SUTRUMPIMAS JWT IKI MUMS REIKALINGŲ DUOMENŲ]
// (39) [ATIDUODAM JWT Į AUTENTIFICIKACIJOS PROVIDERĮ - NAUDOJAM. TAI YRA OBJEKTAS, KURĮ VĖLIAU NAUDOJAM IR SPRINGE - SECURITY KONTEKSTE]