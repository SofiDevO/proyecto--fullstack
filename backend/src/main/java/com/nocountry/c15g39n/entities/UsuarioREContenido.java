package com.nocountry.c15g39n.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "usuariosre_contenidos")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UsuarioREContenido {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "flag_contenido_realizado")
    private Boolean flagContenidoRealizado;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "usuario_ruta_etapa_id", nullable = false)
    private UsuarioRutaEtapa usuarioRutaEtapa;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "contenido_id", nullable = false)
    private Contenido contenido;
}
