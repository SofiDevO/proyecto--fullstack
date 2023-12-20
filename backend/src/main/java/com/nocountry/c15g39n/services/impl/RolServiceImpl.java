package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.entities.Rol;
import com.nocountry.c15g39n.exception.RolsNoExistenException;
import com.nocountry.c15g39n.repositories.RolRepository;
import com.nocountry.c15g39n.services.IRolService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RolServiceImpl implements IRolService {
    private final RolRepository rolRepository;
    @Override
    public List<Rol> obtenerRoles() {
        List<Rol> roles= rolRepository.findAll();
        if(roles.isEmpty()) throw new RolsNoExistenException();
        return roles;
    }
}
