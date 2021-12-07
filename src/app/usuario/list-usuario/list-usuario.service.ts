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
export class ListUserService {
  
  apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get(`${this.apiUrl}/api/user/list`, httpOptions);
  }

  delete(id: any): Observable<any>{
    return this.http.delete(`${this.apiUrl}/api/user/` + id, httpOptions);
  }
}
