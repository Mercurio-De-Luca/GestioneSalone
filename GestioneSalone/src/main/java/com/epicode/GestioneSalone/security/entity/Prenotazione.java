package com.epicode.GestioneSalone.security.entity;

import java.time.LocalDate;
import java.time.LocalTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Entity
public class Prenotazione {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String cliente;
	@Column(nullable = false)
	private LocalDate data;
	@Column(nullable = false)
	private LocalTime ora;
	
	public Prenotazione(String cliente, LocalDate data, LocalTime ora) {
		this.cliente = cliente;
		this.data = data;
		this.ora = ora;
	}
	
}
