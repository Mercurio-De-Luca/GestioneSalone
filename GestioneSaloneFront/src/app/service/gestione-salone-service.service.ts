import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignupData } from '../interfaces/isignup-data';
import { ISigninData } from '../interfaces/isignin-data';
import { IPrenotazione } from '../interfaces/iprenotazione';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GestioneSaloneService {

  loggedIn: boolean = false;
  headers = new HttpHeaders();
  baseURL =  "http://localhost:8080/api/prenotazioni/tutte";

  constructor(private http: HttpClient, private router: Router) { }


  signup(user: ISignupData){
    return this.http.post('http://localhost:8080/api/auth/register', user);
  }

  signin(user: ISigninData){
    return this.http.post('http://localhost:8080/api/auth/login', user);
  }

  // Metodo per verificare lo stato di autenticazione
  getPrenotazioni(): Observable<IPrenotazione[]> {
    let json = localStorage.getItem('userLogin');
    if (json) {
        let userLogin = JSON.parse(json);
        this.headers = this.headers.set('Authorization', 'Bearer ' + userLogin.accessToken);
    }

    // Imposta withCredentials su true
    const options = { headers: this.headers, withCredentials: true };

   return  this.http.get<IPrenotazione[]>('http://localhost:8080/api/prenotazioni/tutte');
  }



  //metodo per salvare la prenotazione nel DB
  salvaPren(prenotazione: IPrenotazione){
    let json = localStorage.getItem('userLogin');
    if (json) {
        let userLogin = JSON.parse(json);
        this.headers = this.headers.set('Authorization', 'Bearer ' + userLogin.accessToken);
    }

    // Imposta withCredentials su true
    const options = { headers: this.headers, withCredentials: true };

    return this.http.post('http://localhost:8080/api/prenotazioni/prenota', prenotazione, options);
}

  isAuth() {
    // return false;
    // return this.loggedIn;
    const loggedIn = localStorage.getItem('loggedIn');
  return loggedIn === 'true';
  }
  //bombetta3000

  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }
}
