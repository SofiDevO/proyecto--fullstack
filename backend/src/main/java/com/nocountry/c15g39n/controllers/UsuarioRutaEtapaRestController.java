package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.dto.response.UsuarioRutaEtapasResponseDto;
import com.nocountry.c15g39n.entities.Etapa;
import com.nocountry.c15g39n.services.IUsuarioRutaEtapaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/usuario_etapa")
@RequiredArgsConstructor
public class UsuarioRutaEtapaRestController {
    private final IUsuarioRutaEtapaService usuarioRutaEtapaService;

    @GetMapping("/obtenerTodas")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<UsuarioRutaEtapasResponseDto> obtenerTodasLasEtapasDelUsuario(){
        return ResponseEntity.ok(usuarioRutaEtapaService.obtenerTodasLasEtapasDelUsuario());
    }

    @GetMapping("/filtrar")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Etapa>> filtrarPorRutasIdAndEtapasId(@RequestParam(name = "rutaId") List<Long> rutaId, @RequestParam(name = "etapaId", required = false) List<Long> etapaId){
        return ResponseEntity.ok(usuarioRutaEtapaService.obtenerEtapasPorRutasIdsYEtapaIds(rutaId, etapaId));
    }
}
