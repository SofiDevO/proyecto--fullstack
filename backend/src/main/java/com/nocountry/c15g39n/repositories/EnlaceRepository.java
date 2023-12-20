package com.nocountry.c15g39n.repositories;

import com.nocountry.c15g39n.entities.Contenido;
import com.nocountry.c15g39n.entities.Enlace;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EnlaceRepository extends JpaRepository<Enlace, Long> {
    Optional<List<Enlace>> findAllByContenidoId(Long contenidoId);
}
