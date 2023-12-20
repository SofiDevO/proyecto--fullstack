package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.entities.Etapa;
import com.nocountry.c15g39n.services.IEtapaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/etapa")
@RequiredArgsConstructor
public class EtapaRestController {
    private final IEtapaService etapaService;

    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Etapa>> obtenerTodasLasEtapas(){
        return ResponseEntity.status(HttpStatus.OK).body(etapaService.obtenerEtapas());
    }
}
