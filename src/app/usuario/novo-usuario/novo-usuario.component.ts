import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BnNgIdleService } from 'bn-ng-idle';
import { DOCUMENT } from '@angular/common';
import { NewUserService } from '../novo-usuario/usuario.service';
import { Usuario } from '../novo-usuario/usuario';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
  exportAs: 'ngForm'
})
export class NovoUsuarioComponent implements OnInit {

  apiUrl = `${environment.apiUrl}`;
  url = `${environment.urlDes}`;

  submitted = false;
  usuario = new Usuario();

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private idleService: BnNgIdleService,
    private newUserService: NewUserService,
    private http: HttpClient,
    private location: Location
  ) { }

  ngOnInit(): void {

  }

  newUser(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

  addUser() {
    this.save();
  }

  back() {
    this.voltar();
  }

  private voltar(): void {
    this.location.back();
  }

  private save(): void {
    console.log(this.usuario);
    this.newUserService.salvarUser(this.usuario).subscribe(
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
