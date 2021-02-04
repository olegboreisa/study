package lt.boreisa.backend.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lt.boreisa.backend.model.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class JwtProvider {

    @Value("#{${security.jwt.expire-in-mins} * 60000}")
    private long validityMillis;

    @Value("${security.jwt.secret-key}")
    private byte[] secret;

    public String createToken(User user) {
        Date now = new Date();

        return Jwts.builder()
                .signWith(Keys.hmacShaKeyFor(secret), SignatureAlgorithm.HS512)
                .setHeaderParam("type", "JWT") // [TYPE]
                .setIssuer("Article-Api") // [PROVIDER BACK]
                .setAudience("Article-Front") //[CONSUMER FRONT]
                .setIssuedAt(now)
                .setSubject(user.getUsername()) // [WHO CARRIES BUILDED TOKEN]
                .setExpiration(new Date(now.getTime() + validityMillis))
                .claim("roles", user.getAuthorities().stream()
                                        .map(grantedAuthority -> grantedAuthority.getAuthority())
                                        .collect(Collectors.toList())) // [CUSTOM OBJECTS THAT WE WANT TO ADD .. IN HEADERS..?]
                .compact();
    }

    public Authentication getAuthentication(String jwt) {
        // [PARSE AND VALIDATE JWT]
        Jws<Claims> parsedJwt = Jwts.parserBuilder()
                .setSigningKey(secret) // [TO CHECK SIGNATURE VALIDITY]
                .build()
                .parseClaimsJws(jwt);

        String username = parsedJwt.getBody().getSubject();
        List<GrantedAuthority> roles = ((List<String>) parsedJwt.getBody().get("roles")).stream()
                .map(roleString -> new SimpleGrantedAuthority(roleString))
                .collect(Collectors.toList()); // [1:49:00]

        // [CREATE AUTHENTICATION OBJECT]
        if (StringUtils.isNotEmpty(username)) {
            return new UsernamePasswordAuthenticationToken(username, null, roles);
        }

        return null;
    }
}
