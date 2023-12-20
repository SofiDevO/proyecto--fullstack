package com.nocountry.c15g39n.repositories;

import com.nocountry.c15g39n.entities.UsuarioRuta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UsuarioRutaRepository extends JpaRepository<UsuarioRuta, Long> {
    Optional<UsuarioRuta> findByUsuarioIdAndRutaId(Long usuarioId, Long rutaId);

    Optional<List<UsuarioRuta>> findAllByUsuarioId(Long usuarioId);
}
