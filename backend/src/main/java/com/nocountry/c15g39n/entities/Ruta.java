package com.nocountry.c15g39n.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "rutas")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Ruta {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(name = "nombre", length = 100)
    private String nombre;
    @Lob
    private String descripcion;
}
