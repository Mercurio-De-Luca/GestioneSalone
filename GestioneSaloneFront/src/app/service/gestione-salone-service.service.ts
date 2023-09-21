import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISignupData } from '../interfaces/isignup-data';
import { ISigninData } from '../interfaces/isignin-data';

@Injectable({
  providedIn: 'root'
})
export class GestioneSaloneService {

  loggedIn: boolean = false;

  constructor(private http: HttpClient) { }


  signup(user: ISignupData){
    return this.http.post('http://localhost:8080/api/auth/register', user);
  }

  signin(user: ISigninData){
    return this.http.post('http://localhost:8080/api/auth/login', user);
  }
}
