package com.nocountry.c15g39n.services.impl;

import com.nocountry.c15g39n.dto.request.UsuarioRutaRequestDto;
import com.nocountry.c15g39n.dto.response.UsuarioRutaEtapasResponseDto;
import com.nocountry.c15g39n.dto.response.UsuarioRutaResponseDto;
import com.nocountry.c15g39n.entities.Etapa;
import com.nocountry.c15g39n.entities.Ruta;
import com.nocountry.c15g39n.entities.UsuarioRuta;
import com.nocountry.c15g39n.entities.UsuarioRutaEtapa;
import com.nocountry.c15g39n.exception.RutaNoExisteException;
import com.nocountry.c15g39n.exception.RutasIdNoEnviadoException;
import com.nocountry.c15g39n.exception.UsuarioAprendizNoAutenticadoException;
import com.nocountry.c15g39n.exception.UsuarioNoTieneEtapaAsociadaException;
import com.nocountry.c15g39n.exception.UsuarioNoTieneRutasAsocidasException;
import com.nocountry.c15g39n.repositories.EtapaRepository;
import com.nocountry.c15g39n.repositories.RutaRepository;
import com.nocountry.c15g39n.repositories.UsuarioRutaEtapaRepository;
import com.nocountry.c15g39n.repositories.UsuarioRutaRepository;
import com.nocountry.c15g39n.services.IEtapaService;
import com.nocountry.c15g39n.services.IToken;
import com.nocountry.c15g39n.services.IUsuarioRutaEtapaService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional
public class UsuarioRutaEtapaServiceImpl implements IUsuarioRutaEtapaService {
    private final IToken token;
    private final RutaRepository rutaRepository;
    private final UsuarioRutaRepository usuarioRutaRepository;
    private final UsuarioRutaEtapaRepository usuarioRutaEtapaRepository;
    private final IEtapaService etapaService;
    private final EtapaRepository etapaRepository;

    @Override
    public void registrarUsuarioRutaEtapa(UsuarioRutaRequestDto usuarioRutaRequestDto) {
        Long idAprendizAuth = validarUsuarioAutenticado();
        List<Long> idRutasDadas = usuarioRutaRequestDto.getIdRutas();
        for (Long idRuta : idRutasDadas) {
            Ruta ruta = rutaRepository.findById(idRuta).orElse(null);
            if (ruta == null) throw new RutaNoExisteException();

            List<Etapa> etapas= etapaService.obtenerEtapasPorRutaId(idRuta);
            UsuarioRuta usuarioRuta = usuarioRutaRepository.findByUsuarioIdAndRutaId(idAprendizAuth, idRuta).orElseThrow();
            for(Etapa etapa: etapas){
                UsuarioRutaEtapa usuarioRutaEtapa = new UsuarioRutaEtapa();
                usuarioRutaEtapa.setUsuarioRuta(usuarioRuta);
                usuarioRutaEtapa.setFlagEtapaRealizada(false);
                usuarioRutaEtapa.setEtapa(etapa);
                usuarioRutaEtapaRepository.save(usuarioRutaEtapa);
            }


        }


    }

    @Override
    public UsuarioRutaEtapasResponseDto obtenerTodasLasEtapasDelUsuario() {
        Long idAprendizAuth = validarUsuarioAutenticado();
        List<UsuarioRuta> usuarioRutas = usuarioRutaRepository.findAllByUsuarioId(idAprendizAuth).orElse(null);

        if (usuarioRutas == null || usuarioRutas.isEmpty()) {
            throw new UsuarioNoTieneRutasAsocidasException();
        }


        List<Etapa> etapas = usuarioRutas.stream()
                .map(usuarioRuta -> usuarioRutaEtapaRepository.findAllByUsuarioRutaId(usuarioRuta.getId()))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .flatMap(usuarioRutaEtapas -> usuarioRutaEtapas.stream().map(UsuarioRutaEtapa::getEtapa))
                .collect(Collectors.toList());


        if (etapas.isEmpty()) {
            throw new UsuarioNoTieneEtapaAsociadaException();
        }

        return new UsuarioRutaEtapasResponseDto(etapas);

    }

    @Override
    public List<Etapa> obtenerEtapasPorRutasIdsYEtapaIds(List<Long> rutasId, List<Long> etapaIds) {
        Long idAprendizAuth = validarUsuarioAutenticado();
        if(rutasId== null || rutasId.isEmpty()) throw new RutasIdNoEnviadoException();



        List<Etapa> etapas = new ArrayList<>();
        List<UsuarioRuta> usuarioRutas= new ArrayList<>();

        for (Long rutaId: rutasId) {
            UsuarioRuta usuarioRuta= usuarioRutaRepository.findByUsuarioIdAndRutaId(idAprendizAuth,rutaId).orElse(null);
            if(usuarioRuta==null) throw new UsuarioNoTieneRutasAsocidasException();
            usuarioRutas.add(usuarioRuta);
        }


        if(etapaIds == null || etapaIds.isEmpty()){

           etapas = obtenerTodasEtapasPorListaRutasId(usuarioRutas);

        }else{
            for (Long id: etapaIds) {
                if(etapaRepository.findById(id).orElse(null)==null) throw new UsuarioNoTieneEtapaAsociadaException();

            }
            for (UsuarioRuta usuarioRuta: usuarioRutas){
                int cont =0;
                for (Long id: etapaIds) {
                   UsuarioRutaEtapa usuarioRutaEtapa = usuarioRutaEtapaRepository.findByUsuarioRutaIdAndEtapaId(usuarioRuta.getId(),id).orElse(null);
                   if(usuarioRutaEtapa!=null){
                       cont++;
                       etapas.add(usuarioRutaEtapa.getEtapa());
                   }



                }
                if(cont==0){
                    etapas.addAll(obtenerTodasEtapasPorRutaId(usuarioRuta));
                }
            }

        }


        return etapas;
    }


    private List<Etapa> obtenerTodasEtapasPorListaRutasId(List<UsuarioRuta> usuarioRutas){
       List<Etapa> etapas = usuarioRutas.stream()
                .map(usuarioRuta -> usuarioRutaEtapaRepository.findAllByUsuarioRutaId(usuarioRuta.getId()))
                .filter(Optional::isPresent)
                .map(Optional::get)
                .flatMap(usuarioRutaEtapas -> usuarioRutaEtapas.stream().map(UsuarioRutaEtapa::getEtapa))
                .collect(Collectors.toList());


        if (etapas.isEmpty()) {
            throw new UsuarioNoTieneEtapaAsociadaException();
        }
        return etapas;
    }

    private List<Etapa> obtenerTodasEtapasPorRutaId(UsuarioRuta usuarioRuta){

     List<UsuarioRutaEtapa> usuarioRutaEtapas=   usuarioRutaEtapaRepository.findAllByUsuarioRutaId(usuarioRuta.getId()).orElseThrow();
     return usuarioRutaEtapas.stream().map(usuarioRutaEtapa -> {
         Etapa etapa = new Etapa();
         etapa.setId(usuarioRutaEtapa.getEtapa().getId());
         etapa.setNombre(usuarioRutaEtapa.getEtapa().getNombre());
         etapa.setDescripcion(usuarioRutaEtapa.getEtapa().getDescripcion());
         etapa.setRuta(usuarioRutaEtapa.getEtapa().getRuta());
         return etapa;
     }).collect(Collectors.toList());

    }

    private Long validarUsuarioAutenticado(){
        String bearerToken = token.getBearerToken();
        if(bearerToken== null) throw new UsuarioAprendizNoAutenticadoException();
        return token.getUsuarioAutenticadoId(bearerToken);
    }
}
