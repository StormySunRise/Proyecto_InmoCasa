import { Component } from '@angular/core';
import { RolComponent } from '../rol.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProveedorService } from '../../../services/proveedor.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from '../../../../interfaces/rol';
import { ReactiveFormsModule } from '@angular/forms';
import { RolService } from '../../../services/rol.service';





@Component({
  selector: 'app-ingrerol',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RolComponent,HttpClientModule,CommonModule
    ,FormsModule,ReactiveFormsModule],
  templateUrl: './ingrerol.component.html',
  styleUrl: './ingrerol.component.css'
})
export class IngrerolComponent {
  rolForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private rolService: RolService,
    private router: Router
  ) {
    this.rolForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  agregarRol(): void {
    if (this.rolForm.valid) {
      const nuevoRol: Rol = {
        id: 0, // El id será generado por la API
        nombre: this.rolForm.get('nombre')?.value
      };

      this.rolService.agregarRol(nuevoRol).subscribe(
        (data: Rol) => {
          console.log('Rol agregado:', data);
          this.rolForm.reset();
          // Opcional: Redirigir a otra página o mostrar un mensaje de éxito
          this.router.navigate(['/rol']); // Ejemplo de redirección
        },
        (error) => {
          console.error('Error al agregar rol:', error);
        }
      );
    }
  }
}