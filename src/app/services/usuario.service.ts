import { Injectable } from '@angular/core';
import { Rol } from '../../interfaces/rol';
import { environment } from '../../environments/environment.development';
import { catchError,tap  } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../../interfaces/usuario';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl: string = `${environment.endpoint}api/Usuario`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
  }

 
  // Obtener todos los usuarios
  obtenerTodos(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl).pipe(
      tap(usuarios => console.log('Usuarios obtenidos:', usuarios)),
      catchError(this.handleError)
    );
  }


  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, usuario).pipe(
      tap(usuarioCreado => console.log('Usuario creado:', usuarioCreado)),
      catchError(this.handleError)
    );
  }



  filtrarUsuarios(id?: number, nombre?: string, apellido?: string, rolId?: number): Observable<Usuario[]> {
    let params = new HttpParams();
    if (id !== undefined) params = params.set('id', id.toString());
    if (nombre) params = params.set('nombre', nombre);
    if (apellido) params = params.set('apellido', apellido);
    if (rolId !== undefined) params = params.set('rolId', rolId.toString());
  
    return this.http.get<Usuario[]>(`${this.apiUrl}/filtrar`, { params }).pipe(
      tap(usuarios => console.log('Usuarios filtrados:', usuarios)),
      catchError(this.handleError)
    );
  }


  eliminarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log(`Usuario con ID ${id} eliminado`)),
      catchError(this.handleError)
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    console.error('Error en la solicitud HTTP:', error);
    if (error.error instanceof ErrorEvent) {
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      console.error(
        `Código de error del backend ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(() => new Error('Algo malo sucedió; por favor, inténtelo de nuevo más tarde.'));
  }
}

