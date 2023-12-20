package com.nocountry.c15g39n.services;

import com.nocountry.c15g39n.dto.response.ProgresoGeneralEtapaResponseDto;

public interface IProgresoService {
    ProgresoGeneralEtapaResponseDto obtenerProgresoDeContenidosPorEtapaYRuta(Long rutaId, Long etapaId);
}
