import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Proveedor } from '../../../interfaces/proveedor';
import { ProveedorService } from '../../services/proveedor.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';
import { FilprovComponent } from './filprov/filprov.component';


@Component({
  selector: 'app-proveedores',
  standalone: true,
  imports: [AppComponent ,RouterLink,RouterOutlet,HttpClientModule,CommonModule,FilprovComponent],
  templateUrl: './proveedores.component.html',
  styleUrl: './proveedores.component.css'
})
export class ProveedoresComponent implements OnInit {
  proveedores: Proveedor[] = [];
  errorMessage: string = '';

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.loadProveedores();
  }

  private loadProveedores(): void {
    this.proveedorService.getAllProveedores().subscribe(
      (data: Proveedor[]) => {
        this.proveedores = data;
      },
      (error: string) => {
        this.errorMessage = error;
      }
    );
  }
}
