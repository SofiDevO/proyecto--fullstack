package com.nocountry.c15g39n.services;

import com.nocountry.c15g39n.dto.request.UsuarioRutaRequestDto;
import com.nocountry.c15g39n.dto.response.UsuarioRutaEtapasResponseDto;
import com.nocountry.c15g39n.entities.Etapa;

import java.util.List;

public interface IUsuarioRutaEtapaService {

    void registrarUsuarioRutaEtapa(UsuarioRutaRequestDto usuarioRutaRequestDto);

    UsuarioRutaEtapasResponseDto obtenerTodasLasEtapasDelUsuario();

    List<Etapa> obtenerEtapasPorRutasIdsYEtapaIds(List<Long> rutasId, List<Long> etapaIds);
}
