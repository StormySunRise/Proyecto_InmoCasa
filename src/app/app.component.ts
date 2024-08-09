import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProveedoresComponent } from './components/proveedores/proveedores.component';
import { AgregarComponent } from './components/proveedores/agregar/agregar.component';
import { FilprovComponent } from './components/proveedores/filprov/filprov.component';
import { ElimiprovComponent } from './components/proveedores/elimiprov/elimiprov.component';
import { EditarprovComponent } from './components/proveedores/editarprov/editarprov.component';
import { OrdecomComponent } from './components/ordecom/ordecom.component';
import { AgregarordeComponent } from './components/ordecom/agregarorde/agregarorde.component';
import { FiltroordeComponent } from './components/ordecom/filtroorde/filtroorde.component';
import { FacturaComponent } from './components/factura/factura.component';
import { OrdeneliComponent } from './components/ordecom/ordeneli/ordeneli.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolComponent } from './components/rol/rol.component';
import { IngrerolComponent } from './components/rol/ingrerol/ingrerol.component';
import { BuscarrolComponent } from './components/rol/buscarrol/buscarrol.component';
import { ActuarolComponent } from './components/rol/actuarol/actuarol.component';
import { ElimirolComponent } from './components/rol/elimirol/elimirol.component';
import { IngreusuComponent } from './components/usuarios/ingreusu/ingreusu.component';
import { BuscarusuComponent } from './components/usuarios/buscarusu/buscarusu.component';
import { ElimiusuComponent } from './components/usuarios/elimiusu/elimiusu.component';
import { BusfacComponent } from './components/factura/busfac/busfac.component';
import { ElifacComponent } from './components/factura/elifac/elifac.component';
import { VerificaComponent } from './components/verifica/verifica.component';
import { ObteveriComponent } from './components/verifica/obteveri/obteveri.component';
import { BusveriComponent } from './components/verifica/busveri/busveri.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { IngrecliComponent } from './components/cliente/ingrecli/ingrecli.component';
import { BuscliComponent } from './components/cliente/buscli/buscli.component';
import { EdicliComponent } from './components/cliente/edicli/edicli.component';
import { ElicliComponent } from './components/cliente/elicli/elicli.component';
import { PropiedadComponent } from './components/propiedad/propiedad.component';
import { IngrepopiComponent } from './components/propiedad/ingrepopi/ingrepopi.component';
import { BuscpropiComponent } from './components/propiedad/buscpropi/buscpropi.component';
import { EdipropiComponent } from './components/propiedad/edipropi/edipropi.component';
import { EliproComponent } from './components/propiedad/elipro/elipro.component';
import { SolicitudesComponent } from './components/solicitudes/solicitudes.component';
import { AgresoliComponent } from './components/solicitudes/agresoli/agresoli.component';
import { AgreconComponent } from './components/contrato/agrecon/agrecon.component';
import { ContratoComponent } from './components/contrato/contrato.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BusveriComponent,LoginComponent,BuscliComponent,EdicliComponent,ElicliComponent,ContratoComponent,AgreconComponent,
    RouterLink,BusfacComponent,ElifacComponent,IngrepopiComponent,BuscpropiComponent,EliproComponent,AgresoliComponent,
    VerificaComponent,ObteveriComponent,PropiedadComponent,IngrepopiComponent,EdipropiComponent,SolicitudesComponent,
    CabeceraComponent,PieComponent,PrincipalComponent,ProveedoresComponent,ElimiusuComponent,ClienteComponent,IngrecliComponent,
    AgregarComponent,FilprovComponent,ElimiprovComponent,AgregarordeComponent,BuscarusuComponent,IngreusuComponent,FiltroordeComponent,
    EditarprovComponent,ElimiprovComponent,BuscarrolComponent,ElimirolComponent,ActuarolComponent,OrdecomComponent,IngrerolComponent,FacturaComponent,OrdeneliComponent,RolComponent,UsuariosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProyectoGrupo07';
}
