package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.entities.Etapa;
import com.nocountry.c15g39n.entities.Ruta;
import com.nocountry.c15g39n.exception.EtapasNoExistenException;
import com.nocountry.c15g39n.exception.RolsNoExistenException;
import com.nocountry.c15g39n.exception.RutaNoExisteException;
import com.nocountry.c15g39n.repositories.EtapaRepository;
import com.nocountry.c15g39n.repositories.RutaRepository;
import com.nocountry.c15g39n.services.IEtapaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class EtapaServiceIml implements IEtapaService {

    private final EtapaRepository etapaRepository;
    private final RutaRepository rutaRepository;

    @Override
    public List<Etapa> obtenerEtapasPorRutaId(Long rutaId) {
        Ruta ruta = rutaRepository.findById(rutaId).orElse(null);
        if (ruta == null) throw new RutaNoExisteException();
        return etapaRepository.findAllByRuta_id(rutaId).orElseThrow();
    }
    public List<Etapa> obtenerEtapas() {
        List<Etapa> etapas= etapaRepository.findAll();
        if(etapas.isEmpty()) throw new EtapasNoExistenException();
        return etapas;
    }
}
