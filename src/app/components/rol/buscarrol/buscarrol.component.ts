import { Component } from '@angular/core';
import { Rol } from '../../../../interfaces/rol';
import { RolComponent } from '../rol.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolService } from '../../../services/rol.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-buscarrol',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RolComponent,CommonModule, FormsModule],
  templateUrl: './buscarrol.component.html',
  styleUrl: './buscarrol.component.css'
})
export class BuscarrolComponent implements OnInit {
  rol: Rol | undefined;
  id: number | undefined;
  errorMessage: string | undefined;

  constructor(private rolService: RolService, private router: Router) {}

  ngOnInit(): void {}

  buscarRolPorId(): void {
    if (this.id != null) {
      this.rolService.obtenerRolPorId(this.id).subscribe({
        next: (data: Rol) => this.rol = data,
        error: (err) => this.errorMessage = err
      });
    }
  }
}
