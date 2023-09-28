import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneSaloneService } from 'src/app/service/gestione-salone-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private gs: GestioneSaloneService, private router: Router){}

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    this.gs.loggedIn = false;
  }
}
