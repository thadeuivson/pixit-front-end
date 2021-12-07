import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BnNgIdleService } from 'bn-ng-idle';
import { DOCUMENT } from '@angular/common';
import { NewUserService } from './novo-usuario/usuario.service';
import { Usuario } from './novo-usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
  exportAs: 'ngForm'
})
export class UsuarioComponent implements OnInit {

  apiUrl = `${environment.apiUrl}`;
  url = `${environment.urlDes}`;

  submitted = false;
  user = new Usuario();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private newUserService: NewUserService,
  ) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new Usuario();
  }

  addUser() {
    this.save();
  }

  private save(): void {
    console.log(this.user);
    this.newUserService.salvarUser(this.user).subscribe(
      (response) => {
        console.log(response);
        this.submitted = true;
      },
      (error) => {
        console.log(error);
        this.submitted = false;
      }
    );
  }

}
