import { Component } from '@angular/core';
import { Rol } from '../../../../interfaces/rol';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-elimirol',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule],
  templateUrl: './elimirol.component.html',
  styleUrl: './elimirol.component.css'
})
export class ElimirolComponent  {
}
