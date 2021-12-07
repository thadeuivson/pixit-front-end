import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NovoUsuarioComponent } from './usuario/novo-usuario/novo-usuario.component';

import { httpInterceptorProviders } from './http-interceptors';
import { BnNgIdleService } from 'bn-ng-idle';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    NovoUsuarioComponent,
    ListUsuarioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BnNgIdleService, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
