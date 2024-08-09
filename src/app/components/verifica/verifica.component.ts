import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerifiService } from '../../services/verifi.service';
import { Verificacion } from '../../../interfaces/verificacion';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ObteveriComponent } from './obteveri/obteveri.component';
import { BusveriComponent } from './busveri/busveri.component';


@Component({
  selector: 'app-verifica',
  standalone: true,
  imports: [RouterLink,RouterOutlet,BusveriComponent,CommonModule,ReactiveFormsModule,ObteveriComponent],
  templateUrl: './verifica.component.html',
  styleUrl: './verifica.component.css'
})
export class VerificaComponent implements OnInit {
  verificacionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private verifiService: VerifiService
  ) {
    this.verificacionForm = this.fb.group({
      facturaId: ['', Validators.required],
      fechaVerificacion: ['', Validators.required],
      resultado: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.verificacionForm.valid) {
      const nuevaVerificacion: Verificacion = {
        facturaId: this.verificacionForm.get('facturaId')?.value,
        fechaVerificacion: new Date(this.verificacionForm.get('fechaVerificacion')?.value),
        resultado: this.verificacionForm.get('resultado')?.value
      };

      this.verifiService.agregarVerificacion(nuevaVerificacion).subscribe({
        next: (verificacion) => {
          console.log('Verificación agregada con éxito', verificacion);
          this.verificacionForm.reset();
          // Aquí puedes agregar lógica adicional, como mostrar un mensaje de éxito
        },
        error: (error) => {
          console.error('Error al agregar verificación', error);
          // Aquí puedes manejar el error, como mostrar un mensaje al usuario
        }
      });
    }
  }
}
