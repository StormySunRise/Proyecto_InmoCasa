import { Component } from '@angular/core';
import { UsuariosComponent } from '../usuarios.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../../interfaces/usuario';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Rol } from '../../../../interfaces/rol';
import { OnInit } from '@angular/core';
import { RolService } from '../../../services/rol.service';




@Component({
  selector: 'app-ingreusu',
  standalone: true,
  imports: [RouterLink,RouterOutlet,UsuariosComponent,HttpClientModule,CommonModule
    ,FormsModule,ReactiveFormsModule
  ],
  templateUrl: './ingreusu.component.html',
  styleUrl: './ingreusu.component.css'
})
export class IngreusuComponent  {
  usuarioForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.usuarioForm = this.fb.group({
      id: [0, Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', Validators.required],
      passwordHash: ['', [Validators.required, Validators.minLength(6)]],
      rolId: [0, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.valid) {
      const nuevoUsuario: Usuario = this.usuarioForm.value;
      console.log('Datos del usuario a enviar:', nuevoUsuario);
      this.usuarioService.agregarUsuario(nuevoUsuario).subscribe({
        next: (usuario) => {
          console.log('Usuario creado exitosamente:', usuario);
          this.router.navigate(['/usuarios']);
        },
        error: (error) => {
          console.error('Error detallado:', error);
          alert('Error al crear usuario: ' + error.message);
        }
      });
    } else {
      console.log('Formulario inválido', this.usuarioForm.errors);
    }
  }
}