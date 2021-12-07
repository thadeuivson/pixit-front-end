import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { LoginService } from './login.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login = {
    user_nome: '',
    user_senha: ''
  };
  
  token = '';
  error = 'erroLogin';
  url = `${environment.urlDes}`;
  urlApi = `${environment.apiUrl}`;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.redirect();
  }

  async redirect() {
    this.router.navigate(['/login'], { skipLocationChange: true });
  }

  async onSubmit() {
    try {
      console.log(this.login)
      const result = await this.loginService.login(this.login);
      console.log(`Login efetuado: ${result}`);
      this.router.navigate(['']);
    } catch (error) {
      console.log(error)
    }
  }

}
