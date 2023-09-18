package com.epicode.GestioneSalone.security.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

import com.epicode.GestioneSalone.security.entity.Prenotazione;

@Configuration
public class PrenotazioneConfiguration {

	@Bean("prenotazioneBean")
	@Scope("prototype")
	public Prenotazione customPrenotazione() {
		return new Prenotazione();
	}
}
