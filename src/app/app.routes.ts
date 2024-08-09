import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
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
import { EditarusuComponent } from './components/usuarios/editarusu/editarusu.component';
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
import { ContratoComponent } from './components/contrato/contrato.component';
import { AgreconComponent } from './components/contrato/agrecon/agrecon.component';


export const routes: Routes = [
    {path:'login',component:LoginComponent},
    {path:'principal',component:PrincipalComponent},
    {path:'proveedores',component:ProveedoresComponent},
    {path:'agregar',component:AgregarComponent},
    {path:'filprov',component:FilprovComponent},
    {path:'elimiprov',component:ElimiprovComponent},
    {path:'editarprov',component:EditarprovComponent},
    {path:'ordecom',component:OrdecomComponent},
    {path:'agregarorde',component:AgregarordeComponent},
    {path:'filtroorde',component:FiltroordeComponent},
    {path:'factura',component:FacturaComponent},
    {path:'ordeneli',component:OrdeneliComponent},
    {path:'usuarios',component:UsuariosComponent},
    {path:'rol',component:RolComponent},
    {path:'ingrerol',component:IngrerolComponent},
    {path:'buscarrol',component:BuscarrolComponent},
    {path:'actuarol',component:ActuarolComponent},
    {path:'elimirol',component:ElimirolComponent},
    {path:'ingreusu',component:IngreusuComponent},
    {path:'buscarusu',component:BuscarusuComponent},
    {path:'editarusu',component:EditarusuComponent},
    {path:'elimiusu',component:ElimiusuComponent},
    {path:'busfac',component:BusfacComponent},
    {path:'elifac',component:ElifacComponent},
    {path:'verifica',component:VerificaComponent},
    {path:'obteveri',component:ObteveriComponent},
    {path:'busveri',component:BusveriComponent},
    {path:'cliente',component:ClienteComponent},
    {path:'ingrecli',component:IngrecliComponent},
    {path:'buscli',component:BuscliComponent},
    {path:'edicli',component:EdicliComponent},
    {path:'elicli',component:ElicliComponent},
    {path:'propiedad',component:PropiedadComponent},
    {path:'ingrepropi',component:IngrepopiComponent},
    {path:'buscpropi',component:BuscpropiComponent},
    {path:'edipropi',component:EdipropiComponent},
    {path:'elipro',component:EliproComponent},
    {path:'solicitudes',component:SolicitudesComponent},
    {path:'agresoli',component:AgresoliComponent},
    {path:'contrato',component:ContratoComponent},
    {path:'agrecon',component:AgreconComponent},



    {path:'**', redirectTo:'principal', pathMatch:'full'},
    {path: '', redirectTo:'principal', pathMatch:'full'},
];
