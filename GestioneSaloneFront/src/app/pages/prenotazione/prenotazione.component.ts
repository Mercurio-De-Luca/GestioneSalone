import { IPrenotazione } from './../../interfaces/iprenotazione';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GestioneSaloneService } from 'src/app/service/gestione-salone-service.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit{

  @ViewChild('f') form!: NgForm;
  error: undefined | string;
  model: NgbDateStruct | undefined;

  constructor(private gs: GestioneSaloneService, private calendar: NgbCalendar) { }

  ngOnInit(): void {
  }

  onDateSelect(event: any) {
    this.model = event;
  }

  salvaPrenotazione() {
    if (
        this.form.value.data &&
        this.form.value.ora.trim() !== '' &&
        this.form.value.cliente.trim() !== ''
    ) {
        let data = this.form.value.data;
        let year = data.year;
        let month = data.month < 10 ? '0' + data.month : data.month;
        let day = data.day < 10 ? '0' + data.day : data.day;

        let formattedDate = year + '-' + month + '-' + day;

        // Chiamata al service per ottenere le prenotazioni
        this.gs.getPrenotazioni().subscribe(
            (prenotazioni: IPrenotazione[]) => {
                // Verifica se esiste già una prenotazione con la stessa data e ora
                const prenotazioneEsistente = prenotazioni.find((prenotazione) => {
                    return prenotazione.data === formattedDate && prenotazione.ora === this.form.value.ora;
                });

                if (!prenotazioneEsistente) {
                    // Nessuna prenotazione con la stessa data e ora, procedi con la prenotazione
                    this.form.value.data = formattedDate;
                    console.log(this.form.value);
                    this.gs.salvaPren(this.form.value).subscribe(
                        (resp) => {
                            console.log(resp);
                            this.error = undefined;
                            this.form.reset();
                        },
                        (err) => {
                            console.log(err.error.message);
                            this.error = err.error.message;
                        }
                    );
                } else {
                    // Esiste già una prenotazione con la stessa data e ora, mostra un messaggio di errore
                    this.error = 'L\'ora è già stata prenotata per questa data.';
                    this.form.reset();
                }
            },
            (err: any) => {
                console.log(err);
                this.error = 'Si è verificato un errore durante il recupero delle prenotazioni.';
            }
        );
    } else {
        this.error = 'Field Required';
        this.form.reset();
    }
}


}
