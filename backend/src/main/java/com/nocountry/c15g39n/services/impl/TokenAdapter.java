package com.nocountry.c15g39n.services.impl;


import com.nocountry.c15g39n.exception.NoDataFoundException;
import com.nocountry.c15g39n.security.TokenUtils;
import com.nocountry.c15g39n.services.IToken;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

@Service
@RequiredArgsConstructor
@Transactional
public class TokenAdapter implements IToken {

    private final TokenUtils tokenUtils;
    @Override
    public String getBearerToken() {
        return ((ServletRequestAttributes) RequestContextHolder.getRequestAttributes()).getRequest().getHeader("Authorization");
    }

    @Override
    public String getCorreo(String token) {
        if(token==(null)) throw  new NoDataFoundException();
        return tokenUtils.getCorreo(token.replace("Bearer ",""));
    }

    @Override
    public Long getUsuarioAutenticadoId(String token) {
        if(token==(null)) throw  new NoDataFoundException();
        return tokenUtils.getUsuarioAutenticadoId(token.replace("Bearer ",""));
    }

    @Override
    public String getUsuarioAutenticadoRol(String token) {
        if(token==(null)) throw  new NoDataFoundException();
        return tokenUtils.getUsuarioAutenticadoRol(token.replace("Bearer ",""));
    }
}
