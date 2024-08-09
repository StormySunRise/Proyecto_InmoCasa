import { Component } from '@angular/core';
import { Factura } from '../../../../interfaces/factura';
import { FacturaService } from '../../../services/factura.service';
import { FacturaComponent } from '../factura.component';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';





@Component({
  selector: 'app-elifac',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FacturaComponent],
  templateUrl: './elifac.component.html',
  styleUrl: './elifac.component.css'
})
export class ElifacComponent {

}
