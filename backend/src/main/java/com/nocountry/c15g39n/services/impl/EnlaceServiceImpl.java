package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.entities.Enlace;
import com.nocountry.c15g39n.entities.Contenido;
import com.nocountry.c15g39n.exception.EnlaceNoExisteException;
import com.nocountry.c15g39n.exception.ContenidoNoExistenException;
import com.nocountry.c15g39n.repositories.EnlaceRepository;
import com.nocountry.c15g39n.repositories.ContenidoRepository;
import com.nocountry.c15g39n.services.IEnlaceService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class EnlaceServiceImpl implements IEnlaceService {

    private final EnlaceRepository enlaceRepository;

    private final ContenidoRepository contenidoRepository;

    @Override
    public List<Enlace> obtenerEnlacesPorContenidoId(Long contenidoId) {
        Contenido contenido = contenidoRepository.findById(contenidoId).orElse(null);
        if(contenido==null) throw new ContenidoNoExistenException();

        return enlaceRepository.findAllByContenidoId(contenidoId).orElseThrow();
    }
    public List<Enlace> obtenerEnlaces() {
        List<Enlace> enlaces = enlaceRepository.findAll();
        if(enlaces.isEmpty()) throw new EnlaceNoExisteException();
        return enlaces;
    }
}
