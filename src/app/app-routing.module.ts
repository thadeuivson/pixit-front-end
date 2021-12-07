import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { NovoUsuarioComponent } from './usuario/novo-usuario/novo-usuario.component';
import { ListUsuarioComponent } from './usuario/list-usuario/list-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [{ path: '', component: UsuarioComponent }],
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: '/login' },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'usuario',
    component: UsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario/novo-usuario',
    component: NovoUsuarioComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'usuario/list',
    component: ListUsuarioComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
