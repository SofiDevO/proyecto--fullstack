package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.dto.request.UsuarioRutaRequestDto;
import com.nocountry.c15g39n.entities.Ruta;
import com.nocountry.c15g39n.entities.UsuarioRuta;
import com.nocountry.c15g39n.services.IUsuarioREContenidoService;
import com.nocountry.c15g39n.services.IUsuarioRutaEtapaService;
import com.nocountry.c15g39n.services.IUsuarioRutaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/usuario_ruta")
@RequiredArgsConstructor
public class UsuarioRutaRestController {

    private final IUsuarioRutaService usuarioRutaService;
    private final IUsuarioRutaEtapaService usuarioRutaEtapaService;
    private final IUsuarioREContenidoService usuarioREContenidoService;

    @PostMapping("/registrar")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<Void> registrarRutaEtapaContenidosUsuarioAsociado(@Valid @RequestBody UsuarioRutaRequestDto usuarioRutaRequestDto) {
        usuarioRutaService.registrarRutasUsuario(usuarioRutaRequestDto);
        usuarioRutaEtapaService.registrarUsuarioRutaEtapa(usuarioRutaRequestDto);
        usuarioREContenidoService.registrarUsuarioREContenido(usuarioRutaRequestDto);
       return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("obtenerRutasAsociadas")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Ruta>> obtenerRutasAsociadas(){
        return ResponseEntity.ok().body(usuarioRutaService.obtenerRutasAsociadasConUsuario());
    }

}
