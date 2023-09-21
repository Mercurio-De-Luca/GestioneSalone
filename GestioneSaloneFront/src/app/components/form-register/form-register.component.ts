import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { GestioneSaloneService } from 'src/app/service/gestione-salone-service.service';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  @ViewChild('f') form!: NgForm;
  error: undefined | string;

  constructor(private gs: GestioneSaloneService, private router: Router) {}

  ngOnInit(): void {

  }

  onSubmit(){
    if(  this.form.value.username.trim() !== ''
      && this.form.value.email.trim() !== ''
      && this.form.value.password.trim() !== '') {
        this.gs.signup(this.form.value).subscribe(
          resp => {
            console.log(resp);
            this.error = undefined;
            this.router.navigate(['/login'])
          }, err => {
            console.log(err.error.message);
            this.error = err.error.message;
          }
        );
    } else {
      this.error = 'Field Required';
    }
  }
}
