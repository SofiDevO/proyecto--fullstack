package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.dto.response.ContenidoCompletadoResponseDto;
import com.nocountry.c15g39n.entities.Enlace;
import com.nocountry.c15g39n.services.IEnlaceService;
import com.nocountry.c15g39n.services.IUsuarioREContenidoService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/enlace")
@RequiredArgsConstructor
public class EnlaceRestController {
    private final IEnlaceService enlaceService;

    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Enlace>> obtenerTodosLosEnlaces(){
        return ResponseEntity.status(HttpStatus.OK).body(enlaceService.obtenerEnlaces());
    }

    @GetMapping("/contenido/{contenidoId}")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Enlace>> obtenerEnlacesPorContenidoId(@PathVariable(name = "contenidoId") Long contenidoId){
        return ResponseEntity.status(HttpStatus.OK).body(enlaceService.obtenerEnlacesPorContenidoId(contenidoId));
    }

}
