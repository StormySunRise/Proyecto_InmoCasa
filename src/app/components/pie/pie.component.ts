import { Component } from '@angular/core';
import { RouterLink,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pie',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './pie.component.html',
  styleUrl: './pie.component.css'
})
export class PieComponent {

}
