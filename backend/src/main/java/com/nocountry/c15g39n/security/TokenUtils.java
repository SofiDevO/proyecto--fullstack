package com.nocountry.c15g39n.security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

@Component
@RequiredArgsConstructor
public class TokenUtils {

    @Value("${ACCESS_TOKEN_SECRET}")
    private String ACCESS_TOKEN_SECRET;

    private final static Long ACCESS_TOKEN_VALIDITY_SECONDS = 21_600L;

    public String createToken(String nombre, String email, String rol, Long id){
        long expirationTime = ACCESS_TOKEN_VALIDITY_SECONDS*1_000;
        Date expirationDate = new Date(System.currentTimeMillis()+expirationTime);

        Map<String, Object> extra = new HashMap<>();
        extra.put("nombre", nombre);
        extra.put("rol", rol);
        extra.put("id", id);

        return Jwts.builder()
                .setSubject(email)
                .setExpiration(expirationDate)
                .addClaims(extra)
                .signWith(Keys.hmacShaKeyFor(ACCESS_TOKEN_SECRET.getBytes()))
                .compact();
    }

    public UsernamePasswordAuthenticationToken getAuthentication(String token){
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();
            String email= claims.getSubject();
            Collection<SimpleGrantedAuthority> authorities=
                    Arrays.stream(claims.get("rol").toString().split(","))
                            .map(SimpleGrantedAuthority::new)
                            .collect(Collectors.toList());

            return new UsernamePasswordAuthenticationToken(email, null, authorities);

        }catch (JwtException e){
            return null;
        }


    }

    public String getCorreo(String token){
        try {
            Claims claims  = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return  claims.getSubject();

        }catch (JwtException e){
            return  null;
        }
    }

    public Long getUsuarioAutenticadoId(String token){
        try {
            Claims claims  = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return claims.get("id", Long.class);

        }catch (JwtException e){
            return  null;
        }
    }

    public String getUsuarioAutenticadoRol(String token){
        try {
            Claims claims  = Jwts.parserBuilder()
                    .setSigningKey(ACCESS_TOKEN_SECRET.getBytes())
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            return claims.get("rol", String.class);

        }catch (JwtException e){
            return  null;
        }
    }
}
