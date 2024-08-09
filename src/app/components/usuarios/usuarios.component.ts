import { Component } from '@angular/core';
import { PrincipalComponent } from '../principal/principal.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../../interfaces/usuario';
import { CommonModule } from '@angular/common';
import { IngreusuComponent } from './ingreusu/ingreusu.component';
import { BuscarusuComponent } from './buscarusu/buscarusu.component';
import { EditarusuComponent } from './editarusu/editarusu.component';
import { ElimiusuComponent } from './elimiusu/elimiusu.component';



@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [RouterLink,RouterOutlet,AppComponent,BuscarusuComponent,ElimiusuComponent,EditarusuComponent,PrincipalComponent,CommonModule,IngreusuComponent],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerTodos().subscribe({
      next: (usuarios) => {
        this.usuarios = usuarios;
        console.log('Usuarios cargados:', this.usuarios);
      },
      error: (error) => {
        console.error('Error al obtener usuarios:', error);
      }
    });
  }

  eliminarUsuario(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      this.usuarioService.eliminarUsuario(id).subscribe({
        next: () => {
          console.log(`Usuario con ID ${id} eliminado`);
          this.obtenerUsuarios(); // Actualiza la lista después de eliminar
        },
        error: (error) => {
          console.error('Error al eliminar usuario:', error);
        }
      });
    }
  }
}
