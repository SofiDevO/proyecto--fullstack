package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.entities.Contenido;
import com.nocountry.c15g39n.services.IContenidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/contenido")
@RequiredArgsConstructor
public class ContenidoRestController {
    private final IContenidoService contenidoService;

    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Contenido>> obtenerTodosLosRoles(){
        return ResponseEntity.status(HttpStatus.OK).body(contenidoService.obtenerContenidos());
    }
}
