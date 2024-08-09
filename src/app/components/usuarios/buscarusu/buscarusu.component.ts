import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { UsuariosComponent } from '../usuarios.component';
import { AppComponent } from '../../../app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-buscarusu',
  standalone: true,
  imports: [RouterLink,RouterOutlet,UsuariosComponent,AppComponent,CommonModule,
    FormsModule,
    HttpClientModule],
  templateUrl: './buscarusu.component.html',
  styleUrl: './buscarusu.component.css'
})
export class BuscarusuComponent implements OnInit {
  usuarios: Usuario[] = [];
  filtro: {
    id: number | null;
    nombre: string;
    apellido: string;
    rolId: number | null;
  } = {
    id: null,
    nombre: '',
    apellido: '',
    rolId: null
  };

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.buscarUsuarios();
  }

  buscarUsuarios() {
    this.usuarioService.filtrarUsuarios(
      this.filtro.id || undefined,
      this.filtro.nombre || undefined,
      this.filtro.apellido || undefined,
      this.filtro.rolId || undefined
    ).subscribe(
      (usuarios) => {
        this.usuarios = usuarios;
      },
      (error) => {
        console.error('Error al filtrar usuarios:', error);
      }
    );
  }

  limpiarFiltros() {
    this.filtro = {
      id: null,
      nombre: '',
      apellido: '',
      rolId: null
    };
    this.buscarUsuarios();
  }
}