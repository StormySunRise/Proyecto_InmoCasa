import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from '../../app.component';
import { PrincipalComponent } from '../principal/principal.component';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterOutlet,AppComponent,PrincipalComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordHidden = true; // Variable para controlar la visibilidad de la contraseña

  togglePasswordVisibility(): void {
    this.passwordHidden = !this.passwordHidden; // Cambiar el estado de la visibilidad de la contraseña
  }
  onButtonMouseEnter(buttonId: string) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.classList.add('button-hover');
    }
  }

  // Método para restaurar el color original del botón al salir del cursor
  onButtonMouseLeave(buttonId: string) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.classList.remove('button-hover');
    }
  }

  // Método para agregar una animación cuando se hace clic en el botón
  onButtonClick(buttonId: string) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.classList.add('button-clicked');
      setTimeout(() => {
        button.classList.remove('button-clicked');
      }, 300); // Restaurar la clase después de 300ms (ajustar según la duración de tu animación)
    }
  }
}