import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Rol } from '../../../interfaces/rol';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { OnInit } from '@angular/core';
import { IngrerolComponent } from './ingrerol/ingrerol.component';
import { BuscarrolComponent } from './buscarrol/buscarrol.component';
import { ActuarolComponent } from './actuarol/actuarol.component';
import { ElimiprovComponent } from '../proveedores/elimiprov/elimiprov.component';
import { RolService } from '../../services/rol.service';

@Component({
  selector: 'app-rol',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,ElimiprovComponent,IngrerolComponent,ActuarolComponent,BuscarrolComponent],
  templateUrl: './rol.component.html',
  styleUrl: './rol.component.css'
})
export class RolComponent  implements OnInit {
  roles: Rol[] = [];

  constructor(private rolService: RolService) {}

  ngOnInit(): void {
    this.rolService.obtenerTodosRoles().subscribe(
      (data: Rol[]) => {
        this.roles = data;
      },
      (error) => {
        console.error('Error al obtener roles:', error);
      }
    );
  }

  eliminarRol(id: number): void {
    if (confirm('¿Estás seguro de que deseas eliminar este rol?')) {
      this.rolService.eliminarRol(id).subscribe(
        () => {
          this.roles = this.roles.filter(rol => rol.id !== id);
          console.log('Rol eliminado con éxito.');
        },
        (error) => {
          console.error('Error al eliminar el rol:', error);
        }
      );
    }
  }
}
