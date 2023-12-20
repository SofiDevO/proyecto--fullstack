package com.nocountry.c15g39n.repositories;

import com.nocountry.c15g39n.entities.Ruta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RutaRepository extends JpaRepository<Ruta, Long> {

}
