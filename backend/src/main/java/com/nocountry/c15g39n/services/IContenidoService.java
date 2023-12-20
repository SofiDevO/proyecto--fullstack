package com.nocountry.c15g39n.services;

import com.nocountry.c15g39n.entities.Contenido;
import com.nocountry.c15g39n.entities.Rol;

import java.util.List;

public interface IContenidoService {
    List<Contenido> onbtenerContenidosPorEtapaId(Long etapaId);
    List<Contenido>  obtenerContenidos();
}
