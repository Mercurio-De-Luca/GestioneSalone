import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestioneSaloneService } from 'src/app/service/gestione-salone-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  nomeUser!: String;

  constructor(private gs: GestioneSaloneService, private router: Router){}

  ngOnInit(): void {
    let json = localStorage.getItem('userLogin');
    if (json) {
        let userLogin = JSON.parse(json);
        this.nomeUser = userLogin.username;
    }
  }



  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    this.gs.loggedIn = false;
  }
}
