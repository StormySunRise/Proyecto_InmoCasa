import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../../interfaces/usuario';
import { UsuarioService } from '../../../services/usuario.service';


@Component({
  selector: 'app-elimiusu',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './elimiusu.component.html',
  styleUrl: './elimiusu.component.css'
})
export class ElimiusuComponent {
}
