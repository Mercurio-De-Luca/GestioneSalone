package com.epicode.GestioneSalone.security.controller;


import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.GestioneSalone.security.entity.Prenotazione;
import com.epicode.GestioneSalone.security.service.PrenotazioneService;

@CrossOrigin(origins = "*", allowedHeaders = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneController {

	@Autowired PrenotazioneService ps;
	
	//fare i metodi get
	@GetMapping("/tutte")
	public Set<Prenotazione> getPren(){
		return ps.getPrenotazioni();
	}
	
	@PostMapping("/prenota")
	public ResponseEntity<?> createPrenotazione(@RequestBody Prenotazione pren) {
	    if (pren.getData() == null || pren.getOra() == null) {
	        return new ResponseEntity<>("I campi data e ora sono obbligatori.", HttpStatus.BAD_REQUEST);
	    }
	    
	    // Verifica che la data e l'ora non siano vuote o vuoti
	    if (pren.getData().toString().isEmpty() || pren.getOra().toString().isEmpty()) {
	        return new ResponseEntity<>("I campi data e ora non possono essere vuoti.", HttpStatus.BAD_REQUEST);
	    }
	    
	    Prenotazione p = ps.salvaPrenotazine(pren); 
	    return new ResponseEntity<Prenotazione>(p, HttpStatus.CREATED);
	}

	
}
