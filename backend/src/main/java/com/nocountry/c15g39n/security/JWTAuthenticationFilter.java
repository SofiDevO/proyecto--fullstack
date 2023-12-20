package com.nocountry.c15g39n.security;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.google.gson.Gson;
import com.nocountry.c15g39n.dto.response.UsuarioLoginResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Collections;

@RequiredArgsConstructor
public class JWTAuthenticationFilter extends UsernamePasswordAuthenticationFilter {

    private final TokenUtils tokenUtils;

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        AuthCredentials authCredentials= new AuthCredentials();

        try {
            authCredentials = new ObjectMapper().readValue(request.getReader(), AuthCredentials.class);
        }catch (IOException e){

        }

        UsernamePasswordAuthenticationToken usernamePAT = new UsernamePasswordAuthenticationToken(
                authCredentials.getEmail(),
                authCredentials.getPassword(),
                Collections.emptyList()
        );


        return getAuthenticationManager().authenticate(usernamePAT);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        UserDetailsImpl userDetails= (UserDetailsImpl) authResult.getPrincipal();
        //System.out.println(Arrays.stream(userDetails.getAuthorities().toArray()).findFirst().toString());
        //userDetails.getAuthorities().toString()
        Object[] authorities = userDetails.getAuthorities().toArray();
        System.out.println(authorities[0].toString());
        String token = tokenUtils.createToken(userDetails.getNombre(), userDetails.getUsername(),
                authorities[0].toString(), userDetails.getId());
        response.addHeader("Authorization", "Bearer "+token);


        Gson gson = new Gson();
        UsuarioLoginResponseDto usuarioLoginResponseDto= new UsuarioLoginResponseDto();
        usuarioLoginResponseDto.setMensaje("Usuario logueado exitosamente.");
        usuarioLoginResponseDto.setToken("Bearer "+token);
        String jsonObject = gson.toJson(usuarioLoginResponseDto);

        // Configura la respuesta con el contenido JSON
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write(jsonObject);
        response.getWriter().flush();

        super.successfulAuthentication(request, response, chain, authResult);
    }
}
