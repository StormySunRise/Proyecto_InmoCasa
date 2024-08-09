import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { ContratoService } from '../../services/contrato.service';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreconComponent } from './agrecon/agrecon.component';
import { Contrato } from '../../../interfaces/contrato';
import { CabeceraComponent } from '../cabecera/cabecera.component';



@Component({
  selector: 'app-contrato',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,AgreconComponent,CabeceraComponent],
  templateUrl: './contrato.component.html',
  styleUrl: './contrato.component.css'
})
export class ContratoComponent implements OnInit {
  contratos: Contrato[] = [];
  error: string = '';

  constructor(private contratoService: ContratoService) { }

  ngOnInit(): void {
    this.loadContratos();
  }

  loadContratos(): void {
    this.contratoService.getAllContratos().subscribe({
      next: (data: Contrato[]) => {
        this.contratos = data;
      },
      error: (err: any) => {
        this.error = err;
      }
    });
  }

  deleteContrato(id: number): void {
    if (confirm('Are you sure you want to delete this contrato?')) {
      this.contratoService.deleteContrato(id).subscribe({
        next: () => {
          this.contratos = this.contratos.filter(c => c.id !== id);
        },
        error: (err: any) => {
          this.error = err;
        }
      });
    }
  }
}
