import { ISignupData } from './interfaces/isignup-data';
import { Component, OnInit } from '@angular/core';
import { GestioneSaloneService } from './service/gestione-salone-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GestioneSaloneFront';
}
