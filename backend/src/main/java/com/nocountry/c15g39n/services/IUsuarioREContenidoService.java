package com.nocountry.c15g39n.services;

import com.nocountry.c15g39n.dto.request.UsuarioRutaRequestDto;
import com.nocountry.c15g39n.dto.response.ContenidoCompletadoResponseDto;
import com.nocountry.c15g39n.dto.response.ContenidoResponseDto;
import com.nocountry.c15g39n.entities.Contenido;

import java.util.List;

public interface IUsuarioREContenidoService {
    void registrarUsuarioREContenido(UsuarioRutaRequestDto usuarioRutaRequestDto);

    ContenidoCompletadoResponseDto marcarContenidoCompletado(Long rutaId, Long etapaId, Long contenidoId);

    List<ContenidoResponseDto> obtenerContenidosPorEtapaId(Long etapaId);
}
