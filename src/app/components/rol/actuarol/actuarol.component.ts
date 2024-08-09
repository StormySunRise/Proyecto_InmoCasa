import { Component,OnInit } from '@angular/core';
import { Rol } from '../../../../interfaces/rol';
import { RolComponent } from '../rol.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule
import { RolService } from '../../../services/rol.service';


@Component({
  selector: 'app-actuarol',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './actuarol.component.html',
  styleUrl: './actuarol.component.css'
})
export class ActuarolComponent {
  rolId: number = 0;
  rolToEdit: Rol | null = null;
  nombre: string = '';
  errorMessage: string | null = null;

  constructor(private rolService: RolService, private router: Router) {}

  buscarRol(): void {
    if (this.rolId) {
      this.rolService.obtenerRolPorId(this.rolId).subscribe({
        next: (rol) => {
          this.rolToEdit = rol;
          this.nombre = rol.nombre;
        },
        error: (err) => this.errorMessage = err
      });
    }
  }

  editarRol(): void {
    if (this.rolToEdit) {
      this.rolToEdit.nombre = this.nombre;
      this.rolService.editarRol(this.rolToEdit).subscribe({
        next: () => {
          alert('Rol actualizado con éxito.');
          this.router.navigate(['/rol']); // Redirige a la lista de roles o donde sea apropiado
        },
        error: (err) => this.errorMessage = err
      });
    }
  }
}