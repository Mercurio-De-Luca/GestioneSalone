package com.epicode.GestioneSalone.security.runner;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


import com.epicode.GestioneSalone.security.service.PrenotazioneService;

@Component
public class PrenotazioniRunner implements CommandLineRunner{

	@Autowired private PrenotazioneService ps;
	
	@Override
	public void run(String... args) throws Exception {
		System.out.println("Prenotazioni run...");
	}

	
}
