package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.entities.Contenido;
import com.nocountry.c15g39n.entities.Etapa;
import com.nocountry.c15g39n.entities.Rol;
import com.nocountry.c15g39n.exception.ContenidoNoExistenException;
import com.nocountry.c15g39n.exception.EtapaNoExisteException;
import com.nocountry.c15g39n.exception.RolsNoExistenException;
import com.nocountry.c15g39n.repositories.ContenidoRepository;
import com.nocountry.c15g39n.repositories.EtapaRepository;
import com.nocountry.c15g39n.services.IContenidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class ContenidoServiceImpl implements IContenidoService {

    private final ContenidoRepository contenidoRepository;

    private final EtapaRepository etapaRepository;

    @Override
    public List<Contenido> onbtenerContenidosPorEtapaId(Long etapaId) {
        Etapa etapa = etapaRepository.findById(etapaId).orElse(null);
        if(etapa==null) throw new EtapaNoExisteException();

        return contenidoRepository.findAllByEtapa_id(etapaId).orElseThrow();
    }
    public List<Contenido> obtenerContenidos() {
        List<Contenido> contenidos= contenidoRepository.findAll();
        if(contenidos.isEmpty()) throw new ContenidoNoExistenException();
        return contenidos;
    }
}
