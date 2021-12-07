import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Usuario } from '../novo-usuario/usuario';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  salvarUser(user: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl + "/api/user", user, httpOptions);
  }
}
