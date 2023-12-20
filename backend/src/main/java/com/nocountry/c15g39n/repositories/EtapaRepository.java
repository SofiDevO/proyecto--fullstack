package com.nocountry.c15g39n.repositories;

import com.nocountry.c15g39n.entities.Etapa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface EtapaRepository extends JpaRepository<Etapa, Long> {

    Optional<List<Etapa>> findAllByRuta_id(Long ruta_id);
}
