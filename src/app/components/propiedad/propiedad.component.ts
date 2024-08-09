import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ClienteComponent } from '../../components/cliente/cliente.component';
import { OnInit } from '@angular/core';
import { PropiedadService } from '../../services/propiedad.service';
import { CommonModule } from '@angular/common';
import { BuscpropiComponent } from './buscpropi/buscpropi.component';
import { IngrepopiComponent } from './ingrepopi/ingrepopi.component';
import { EdipropiComponent } from './edipropi/edipropi.component';
import { EliproComponent } from './elipro/elipro.component';
import { CabeceraComponent } from '../../components/cabecera/cabecera.component';
import { Propiedad } from '../../../interfaces/propiedad';

@Component({
  selector: 'app-propiedad',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ClienteComponent,IngrepopiComponent,
    EliproComponent,EdipropiComponent,CommonModule,BuscpropiComponent,IngrepopiComponent],
  templateUrl: './propiedad.component.html',
  styleUrl: './propiedad.component.css'
})
export class PropiedadComponent implements OnInit {
  propiedades: Propiedad[] = [];
  error: string = '';

  constructor(private propiedadService: PropiedadService) { }

  ngOnInit(): void {
    this.loadPropiedades();
  }

  loadPropiedades(): void {
    this.propiedadService.getAllPropiedades()
      .subscribe({
        next: (data) => {
          this.propiedades = data;
        },
        error: (err) => {
          this.error = 'Hubo un error al cargar las propiedades.';
          console.error('Error:', err);
        }
      });
  }
}
