package com.nocountry.c15g39n.repositories;

import com.nocountry.c15g39n.entities.UsuarioREContenido;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface UsuarioREContenidoRepository extends JpaRepository<UsuarioREContenido, Long> {

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM usuariosre_contenidos WHERE usuario_ruta_etapa_id =?1 ")
    Optional<Long> obtenerContenidoPorEtapa(Long usuarioRutaEtapaId);

    @Query(nativeQuery = true, value = "SELECT COUNT(*) FROM usuariosre_contenidos WHERE usuario_ruta_etapa_id =?1 " +
            "AND flag_contenido_realizado=1")
    Optional<Long> obtenerCantidadContenidoRealizado(Long usuarioRutaEtapaId);

    Optional<UsuarioREContenido> findByUsuarioRutaEtapaIdAndContenidoId(Long usuarioRutaEtapaId, Long contenidoId);

    Optional<List<UsuarioREContenido>> findAllByUsuarioRutaEtapaId(Long usuarioRutaEtapaId);

}
