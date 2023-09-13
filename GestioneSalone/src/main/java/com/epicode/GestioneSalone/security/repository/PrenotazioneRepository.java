package com.epicode.GestioneSalone.security.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.epicode.GestioneSalone.security.entity.Prenotazione;

@Repository
public interface PrenotazioneRepository extends CrudRepository<Prenotazione, Long>{

}
