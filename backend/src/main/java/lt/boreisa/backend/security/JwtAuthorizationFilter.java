//package lt.boreisa.backend.security;
//
//import io.jsonwebtoken.Jwt;
//import org.apache.commons.lang3.StringUtils;
//import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
//import org.springframework.security.authentication.AuthenticationManager;
//import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
//
//import javax.servlet.FilterChain;
//import javax.servlet.ServletException;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//
//import static lt.boreisa.backend.security.SecurityConstants.AUTHORIZATION_HEADER;
//import static lt.boreisa.backend.security.SecurityConstants.AUTHORIZATION_HEADER_PREFIX;
//
//public class JwtAuthorizationFilter extends BasicAuthenticationFilter {
//
//    private JwtProvider jwtProvider;
//
//    public JwtAuthorizationFilter(AuthenticationManager authenticationManager, JwtProvider jwtProvider) {
//        super(authenticationManager);
//        this.jwtProvider = jwtProvider;
//    }
//
//    // [READ JWT TOKEN THAT COMES WITH HTTP HEADER AND PUT IT INTO SPRING SECURITY]
//    @Override
//    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain) throws IOException, ServletException {
//
//        String authorizationHeader = request.getHeader(AUTHORIZATION_HEADER);
//
//        if (StringUtils.isNoneEmpty(authorizationHeader) && authorizationHeader.startsWith(AUTHORIZATION_HEADER_PREFIX)) {
//            String jwt = authorizationHeader.replace(AUTHORIZATION_HEADER_PREFIX, ""); //[DELETING JWT TOKEN PREFIX]
//            Authentication authentication = jwtProvider.getAuthentication(jwt);
//        }
//
//    }
//}
