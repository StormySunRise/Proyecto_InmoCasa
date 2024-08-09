import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { UsuarioService } from '../../../services/usuario.service';
import { Usuario } from '../../../../interfaces/usuario';
import { Rol } from '../../../../interfaces/rol';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-editarusu',
  standalone: true,
  imports: [RouterLink,RouterOutlet,ReactiveFormsModule,FormsModule,CommonModule],
  templateUrl: './editarusu.component.html',
  styleUrl: './editarusu.component.css'
})
export class EditarusuComponent  {
}