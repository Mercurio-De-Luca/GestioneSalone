package com.epicode.GestioneSalone.security.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.GestioneSalone.security.entity.Prenotazione;
import com.epicode.GestioneSalone.security.service.PrenotazioneService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/prenotazioni")
public class PrenotazioneController {

	@Autowired PrenotazioneService ps;
	
	//fare i metodi get
	
	
	@PostMapping("/prenota")
	@PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
	public ResponseEntity<?> createPrenotazione(@RequestBody Prenotazione pren){
		Prenotazione p = ps.salvaPrenotazine(pren); 
		return new ResponseEntity<Prenotazione>(p, HttpStatus.CREATED);
	}
	
}
