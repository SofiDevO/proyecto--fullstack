package com.nocountry.c15g39n.controllers;

import com.nocountry.c15g39n.entities.Rol;
import com.nocountry.c15g39n.services.IRolService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/rol")
@RequiredArgsConstructor
public class RolesRestController {
    private final IRolService rolService;

    @GetMapping("/obtener")
    @PreAuthorize("hasAuthority('APRENDIZ')")
    public ResponseEntity<List<Rol>> obtenerTodosLosRoles(){
        return ResponseEntity.status(HttpStatus.OK).body(rolService.obtenerRoles());
    }
}
