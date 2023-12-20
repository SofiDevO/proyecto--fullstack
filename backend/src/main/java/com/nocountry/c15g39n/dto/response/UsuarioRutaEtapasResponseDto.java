package com.nocountry.c15g39n.dto.response;

import com.nocountry.c15g39n.entities.Etapa;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Data
@AllArgsConstructor
public class UsuarioRutaEtapasResponseDto {
    private List<Etapa> etapas;
}
