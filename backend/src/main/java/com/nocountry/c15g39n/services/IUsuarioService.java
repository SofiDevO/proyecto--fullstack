package com.nocountry.c15g39n.services;


import com.nocountry.c15g39n.dto.request.UsuarioRequestDto;
import com.nocountry.c15g39n.dto.response.UsuarioResponseDto;
import com.nocountry.c15g39n.entities.Usuario;

import java.util.List;

public interface IUsuarioService {
    UsuarioResponseDto registrarUsuario(UsuarioRequestDto usuarioRequestDto);
    List<Usuario> obtenerUsuarios();

}
