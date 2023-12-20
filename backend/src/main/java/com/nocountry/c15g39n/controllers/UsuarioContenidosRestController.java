package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.dto.response.ContenidoCompletadoResponseDto;
import com.nocountry.c15g39n.dto.response.ContenidoResponseDto;
import com.nocountry.c15g39n.services.IUsuarioREContenidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("api/v1/usuario-contenidos")
@RequiredArgsConstructor
public class UsuarioContenidosRestController {

    private final IUsuarioREContenidoService usuarioREContenidoService;

    @PutMapping("/ruta/{rutaId}/etapa/{etapaId}/contenido/{contenidoId}")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<ContenidoCompletadoResponseDto> marcarContenidoCompletado(@PathVariable(name = "rutaId") Long rutaId, @PathVariable(name = "etapaId")Long etapaId, @PathVariable(name = "contenidoId") Long contenidoId){
        return ResponseEntity.ok(usuarioREContenidoService.marcarContenidoCompletado(rutaId, etapaId, contenidoId));
    }

    @GetMapping("/obtener/etapa/{etapaId}")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<ContenidoResponseDto>> obtenerContenidosPorEtapaId(@PathVariable(name = "etapaId")Long etapaId){
        return ResponseEntity.ok(usuarioREContenidoService.obtenerContenidosPorEtapaId(etapaId));

    }

}
