package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.dto.response.ProgresoGeneralEtapaResponseDto;
import com.nocountry.c15g39n.services.IProgresoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/progreso")
@RequiredArgsConstructor
public class ProgresoRestController {

    private final IProgresoService progresoService;

    @GetMapping("/obtener/ruta/{rutaId}/etapa/{etapaId}")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<ProgresoGeneralEtapaResponseDto> obtenerProgresoGeneralPorEtapa(@PathVariable(name = "rutaId") Long rutaId, @PathVariable(name = "etapaId") Long etapaId){
        return ResponseEntity.ok(progresoService.obtenerProgresoDeContenidosPorEtapaYRuta(rutaId,etapaId));
    }
}
