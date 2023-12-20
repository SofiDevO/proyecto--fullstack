package com.nocountry.c15g39n.services;

import com.nocountry.c15g39n.dto.request.UsuarioRutaRequestDto;
import com.nocountry.c15g39n.entities.Ruta;
import com.nocountry.c15g39n.entities.UsuarioRuta;

import java.util.List;

public interface IUsuarioRutaService {
    void registrarRutasUsuario(UsuarioRutaRequestDto usuarioRutaRequestDto);

    List<Ruta> obtenerRutasAsociadasConUsuario();


}
