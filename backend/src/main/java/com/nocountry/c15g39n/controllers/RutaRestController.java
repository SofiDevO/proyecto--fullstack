package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.entities.Ruta;
import com.nocountry.c15g39n.services.IRutaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/ruta")
@RequiredArgsConstructor
public class RutaRestController {
    private final IRutaService rutaService;

    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Ruta>> obtenerTodasLasRutas(){
        return ResponseEntity.status(HttpStatus.OK).body(rutaService.obtenerRutas());
    }
}
