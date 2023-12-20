package com.nocountry.c15g39n.services;

import com.nocountry.c15g39n.entities.Etapa;
import com.nocountry.c15g39n.entities.Rol;

import java.util.List;

public interface IEtapaService {

    List<Etapa> obtenerEtapasPorRutaId(Long rutaId);
    List<Etapa> obtenerEtapas();
}
