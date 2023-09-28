package com.epicode.GestioneSalone.security.service;


import java.time.LocalDate;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.epicode.GestioneSalone.security.entity.Prenotazione;
import com.epicode.GestioneSalone.security.repository.PrenotazioneRepository;

@Service
public class PrenotazioneService {

	@Autowired PrenotazioneRepository prenRep;
	
	@Autowired @Qualifier("prenotazioneBean") private ObjectProvider<Prenotazione> prenotazione;

	//fare il metodo per creare la prenotazione con il bean
	public Prenotazione creaPrenotazione(String cliente, LocalDate data, String ora) {
		Prenotazione p = prenotazione.getObject();
		
		return p.builder()
				.cliente(cliente)
				.data(data)
				.ora(ora)
				.build();
	}
	
	//metodo per salvare una prenotazione nel DB
	public Prenotazione salvaPrenotazine(Prenotazione pren) {
		return prenRep.save(pren);
	}
	
	public Set<Prenotazione> getPrenotazioni(){
		 List<Prenotazione> prenotazioniList = (List<Prenotazione>) prenRep.findAll();
		 return new HashSet<>(prenotazioniList);
	}

}
