package com.nocountry.c15g39n.services;

import com.nocountry.c15g39n.entities.Enlace;

import java.util.List;

public interface IEnlaceService {
    List<Enlace> obtenerEnlacesPorContenidoId(Long contenidoId);
    List<Enlace>  obtenerEnlaces();
}
