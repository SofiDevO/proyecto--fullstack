package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.dto.response.ProgresoGeneralEtapaResponseDto;
import com.nocountry.c15g39n.entities.UsuarioRuta;
import com.nocountry.c15g39n.entities.UsuarioRutaEtapa;
import com.nocountry.c15g39n.exception.EtapaNoExisteException;
import com.nocountry.c15g39n.exception.NoDataFoundException;
import com.nocountry.c15g39n.exception.RutaNoExisteException;
import com.nocountry.c15g39n.exception.UsuarioAprendizNoAutenticadoException;
import com.nocountry.c15g39n.exception.UsuarioNoTieneEtapaAsociadaException;
import com.nocountry.c15g39n.exception.UsuarioNoTieneRutasAsocidasException;
import com.nocountry.c15g39n.repositories.EtapaRepository;
import com.nocountry.c15g39n.repositories.RutaRepository;
import com.nocountry.c15g39n.repositories.UsuarioREContenidoRepository;
import com.nocountry.c15g39n.repositories.UsuarioRutaEtapaRepository;
import com.nocountry.c15g39n.repositories.UsuarioRutaRepository;
import com.nocountry.c15g39n.services.IProgresoService;
import com.nocountry.c15g39n.services.IToken;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class ProgresoServiceImpl implements IProgresoService {
    private final UsuarioRutaRepository usuarioRutaRepository;
    private final UsuarioRutaEtapaRepository usuarioRutaEtapaRepository;
    private final UsuarioREContenidoRepository usuarioREContenidoRepository;
    private final RutaRepository rutaRepository;
    private final EtapaRepository etapaRepository;
    private final IToken token;

    @Override
    public ProgresoGeneralEtapaResponseDto obtenerProgresoDeContenidosPorEtapaYRuta(Long rutaId, Long etapaId) {
        String bearerToken = token.getBearerToken();
        if(bearerToken== null) throw new UsuarioAprendizNoAutenticadoException();
        Long idAprendizAuth = token.getUsuarioAutenticadoId(bearerToken);
        if(rutaRepository.findById(rutaId).orElse(null)==null) throw new RutaNoExisteException();
        if(etapaRepository.findById(etapaId).orElse(null)==null) throw new EtapaNoExisteException();

        UsuarioRuta usuarioRuta = usuarioRutaRepository.findByUsuarioIdAndRutaId(idAprendizAuth, rutaId).orElse(null);
        if(usuarioRuta==null) throw new UsuarioNoTieneRutasAsocidasException();

        UsuarioRutaEtapa usuarioRutaEtapa= usuarioRutaEtapaRepository.findByUsuarioRutaIdAndEtapaId(usuarioRuta.getId(),etapaId).orElse(null);
        if(usuarioRutaEtapa==null) throw new UsuarioNoTieneEtapaAsociadaException();

        Long contenidosExistentesPorEtapa =  usuarioREContenidoRepository.obtenerContenidoPorEtapa(usuarioRutaEtapa.getId()).orElse(null);
        Long cantidadContenidosVistos = usuarioREContenidoRepository.obtenerCantidadContenidoRealizado(usuarioRutaEtapa.getId()).orElse(0L);

        if(contenidosExistentesPorEtapa==null) throw new NoDataFoundException();
        Double porcentajeEtapa=0.0;
        if(cantidadContenidosVistos!=0) porcentajeEtapa=  ((double)cantidadContenidosVistos / (double)contenidosExistentesPorEtapa )*100;

        ProgresoGeneralEtapaResponseDto progresoGeneralEtapaResponseDto = new ProgresoGeneralEtapaResponseDto();
        progresoGeneralEtapaResponseDto.setPorcentaje(porcentajeEtapa.longValue());


        return progresoGeneralEtapaResponseDto;
    }
}
