package com.nocountry.c15g39n.dto.response;

import com.nocountry.c15g39n.entities.Rol;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UsuarioResponseDto {
    private Long id;
    private String nombre;
    private String apellido;
    private String correo;
    private String clave;
    private Date fechaRegistro;
    private Rol rol;
}
