package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.dto.request.UsuarioRutaRequestDto;
import com.nocountry.c15g39n.entities.Ruta;
import com.nocountry.c15g39n.entities.Usuario;
import com.nocountry.c15g39n.entities.UsuarioRuta;
import com.nocountry.c15g39n.exception.RutaNoExisteException;
import com.nocountry.c15g39n.exception.RutaUsuarioExisteException;
import com.nocountry.c15g39n.exception.UsuarioAprendizNoAutenticadoException;
import com.nocountry.c15g39n.exception.UsuarioNoTieneRutasAsocidasException;
import com.nocountry.c15g39n.repositories.RutaRepository;
import com.nocountry.c15g39n.repositories.UsuarioRepository;
import com.nocountry.c15g39n.repositories.UsuarioRutaRepository;
import com.nocountry.c15g39n.services.IToken;
import com.nocountry.c15g39n.services.IUsuarioRutaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class UsuarioRutaServiceImpl implements IUsuarioRutaService {
    private final RutaRepository rutaRepository;
    private final UsuarioRepository usuarioRepository;
    private final UsuarioRutaRepository usuarioRutaRepository;

    private final IToken token;


    @Override
    public void registrarRutasUsuario(UsuarioRutaRequestDto usuarioRutaRequestDto) {
        Long idAprendizAuth = validarUsuarioAutenticado();
        Usuario usuario = usuarioRepository.findById(idAprendizAuth).orElseThrow();
        List<Long> idRutasDadas = usuarioRutaRequestDto.getIdRutas();


        for (int i=0; i<idRutasDadas.size(); i++){
            Ruta ruta = rutaRepository.findById(idRutasDadas.get(i)).orElse(null);
            if( ruta == null)  throw new RutaNoExisteException();

            //Validar si la ruta y usuario ya existen en la intermedia
            UsuarioRuta usuarioRutaValidar = usuarioRutaRepository.findByUsuarioIdAndRutaId(idAprendizAuth, ruta.getId()).orElse(null);
            if(usuarioRutaValidar != null) throw new RutaUsuarioExisteException();

            UsuarioRuta usuarioRuta = new UsuarioRuta();
            usuarioRuta.setUsuario(usuario);
            usuarioRuta.setRuta(ruta);
            usuarioRuta.setFechaRegistro(Date.from(LocalDateTime.now().atZone(ZoneId.systemDefault()).toInstant()));
            usuarioRutaRepository.save(usuarioRuta);
        }

    }

    @Override
    public List<Ruta> obtenerRutasAsociadasConUsuario() {
         Long idAprendizAuth = validarUsuarioAutenticado();
          List<UsuarioRuta> rutas = usuarioRutaRepository.findAllByUsuarioId(idAprendizAuth).orElse(null);
          if(rutas==null) throw new UsuarioNoTieneRutasAsocidasException();
        return rutas.stream().map(usuarioRuta -> {
            Ruta ruta = new Ruta();
            ruta.setId(usuarioRuta.getRuta().getId());
            ruta.setNombre(usuarioRuta.getRuta().getNombre());
            ruta.setDescripcion(usuarioRuta.getRuta().getDescripcion());
            return ruta;
        }).collect(Collectors.toList());
    }

    private Long validarUsuarioAutenticado(){
        String bearerToken = token.getBearerToken();
        if(bearerToken== null) throw new UsuarioAprendizNoAutenticadoException();
        return token.getUsuarioAutenticadoId(bearerToken);
    }
}
