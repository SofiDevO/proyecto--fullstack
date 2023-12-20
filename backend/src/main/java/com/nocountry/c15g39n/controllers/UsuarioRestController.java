package com.nocountry.c15g39n.controllers;


import com.nocountry.c15g39n.dto.request.UsuarioRequestDto;
import com.nocountry.c15g39n.dto.response.UsuarioResponseDto;
import com.nocountry.c15g39n.entities.Usuario;
import com.nocountry.c15g39n.services.IUsuarioService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/v1/usuario")
@RequiredArgsConstructor
public class UsuarioRestController {
    private final IUsuarioService usuarioService;
    @PostMapping("/registrar")
    public ResponseEntity<UsuarioResponseDto> registrarAprendiz(@Valid @RequestBody UsuarioRequestDto aprendiz) {
        return ResponseEntity.status(HttpStatus.CREATED).body(usuarioService.registrarUsuario(aprendiz));
    }
    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Usuario>> obtenerTodosLosUsuarios(){
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.obtenerUsuarios());
    }
}
