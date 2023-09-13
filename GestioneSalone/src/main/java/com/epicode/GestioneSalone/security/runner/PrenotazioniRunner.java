package com.epicode.GestioneSalone.security.runner;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.epicode.GestioneSalone.security.entity.Prenotazione;
import com.epicode.GestioneSalone.security.service.PrenotazioneService;

@Component
public class PrenotazioniRunner implements CommandLineRunner{

	@Autowired private PrenotazioneService ps;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Prenotazioni run...");
		
		Prenotazione p1 = ps.creaPrenotazione("Mirko",LocalDate.of(2023, 11, 10), LocalTime.of(17, 30));
		
		System.out.println(p1);
		
		ps.salvaPrenotazine(p1);
	}

	
}
