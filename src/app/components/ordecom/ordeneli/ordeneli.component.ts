import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-ordeneli',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './ordeneli.component.html',
  styleUrl: './ordeneli.component.css'
})
export class OrdeneliComponent {

}
