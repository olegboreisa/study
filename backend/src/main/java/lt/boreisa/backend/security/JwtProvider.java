package lt.boreisa.backend.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.apache.tomcat.util.net.openssl.ciphers.Authentication;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import java.util.Date;
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
        return null;
    }
}
