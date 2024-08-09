import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';
import { LoginComponent } from '../login/login.component';
import { OrdecomComponent } from '../ordecom/ordecom.component';
import { UsuariosComponent } from '../usuarios/usuarios.component';
import { RolComponent } from '../rol/rol.component';
import { VerificaComponent } from '../verifica/verifica.component';
import { ObteveriComponent } from '../verifica/obteveri/obteveri.component';
import { SearchResult } from '../../../interfaces/searchresult';
import { SearchService } from '../../services/search.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterLink,ObteveriComponent,RouterOutlet,CommonModule,
    FormsModule,AppComponent,VerificaComponent,LoginComponent,OrdecomComponent,UsuariosComponent,RolComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
}
