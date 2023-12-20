package com.nocountry.c15g39n.mapper;

import com.nocountry.c15g39n.dto.response.UsuarioResponseDto;
import com.nocountry.c15g39n.entities.Usuario;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",
        unmappedTargetPolicy = ReportingPolicy.IGNORE,
        unmappedSourcePolicy = ReportingPolicy.IGNORE)
public interface UsuarioToReponseDto {
    UsuarioResponseDto toRespondeDto(Usuario usuario);
}
