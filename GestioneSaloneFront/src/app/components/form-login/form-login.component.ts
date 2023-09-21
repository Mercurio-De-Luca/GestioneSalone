import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneSaloneService } from 'src/app/service/gestione-salone-service.service';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined | string;

  constructor(private gs: GestioneSaloneService,  private router: Router)
  { }

  ngOnInit(): void {
  }

  onSubmit(){
    if( this.form.value.username.trim() !== '' && this.form.value.password.trim() !== '') {
      this.gs.signin(this.form.value).subscribe(
        resp => {
          console.log(resp);
          this.error = undefined;
          this.gs.loggedIn = true;
          localStorage.setItem('userLogin', JSON.stringify(resp));
          this.router.navigate(['/home'])
        }, err => {
          console.log(err.error.message);
          this.error = err.error.message;
        })
      this.error = undefined;
  } else {
    this.error = 'Inserisci credenziali';
  }
  }
}
