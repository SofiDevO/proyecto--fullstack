package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.entities.Ruta;
import com.nocountry.c15g39n.exception.RutaNoExisteException;
import com.nocountry.c15g39n.exception.RutasNoExistenException;
import com.nocountry.c15g39n.repositories.RutaRepository;
import com.nocountry.c15g39n.services.IRutaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class RutaServiceImpl implements IRutaService {
    private final RutaRepository rutaRepository;
    @Override
    public List<Ruta> obtenerRutas() {
        List<Ruta> rutas= rutaRepository.findAll();
        if(rutas.isEmpty()) throw new RutasNoExistenException();
        return rutas;
    }
}
