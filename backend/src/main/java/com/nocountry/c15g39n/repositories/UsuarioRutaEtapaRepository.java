package com.nocountry.c15g39n.repositories;

import com.nocountry.c15g39n.entities.UsuarioRutaEtapa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UsuarioRutaEtapaRepository extends JpaRepository<UsuarioRutaEtapa, Long> {
    Optional<UsuarioRutaEtapa> findByUsuarioRutaIdAndEtapaId(Long usuarioRutaId, Long etapaId);

    Optional<List<UsuarioRutaEtapa>> findAllByUsuarioRutaId(Long usuarioRutaId);
}
