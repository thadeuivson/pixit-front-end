import { Component, OnInit } from '@angular/core';
import { ListUserService } from './list-usuario.service';
import { Usuario } from '../novo-usuario/usuario';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  usuarios: any;
  submitted = false;
    
  constructor(
    public listService: ListUserService
  ) { }

  ngOnInit(): void {
    this.listaUsuarios();
  }

  listaUsuarios(): void {
    this.listService.getAll().subscribe( data => {
      this.usuarios = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

  delete(id: any): void {
    this.listService.delete(id).subscribe( usuarios => {
      this.usuarios = new Usuario();
      this.listaUsuarios();
      },
      (error) => {
        console.log(error + "Erro no delete");
      }
    );
  }

}
