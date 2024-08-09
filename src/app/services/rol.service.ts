import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Rol } from '../../interfaces/rol';
import { catchError,tap  } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RolService {

  private apiUrl: string = `${environment.endpoint}api/Rol`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
  }

    // Método para obtener todos los roles
    obtenerTodosRoles(): Observable<Rol[]> {
      return this.http.get<Rol[]>(this.apiUrl).pipe(
        tap((roles: Rol[]) => console.log('Roles obtenidos:', roles)),
        catchError(this.handleError)
      );
    }

 
     // Método para agregar un rol
  agregarRol(rol: Rol): Observable<Rol> {
    return this.http.post<Rol>(`${this.apiUrl}`, rol)
      .pipe(
        tap(data => console.log('Rol agregado:', data)),
        catchError(this.handleError)
      );
  }



// Método para obtener un rol por ID
obtenerRolPorId(id: number): Observable<Rol> {
  return this.http.get<Rol>(`${this.apiUrl}/${id}`).pipe(
    tap((rol: Rol) => console.log('Rol obtenido por ID:', rol)),
    catchError(this.handleError)
  );
}


  // Método para editar un rol
  editarRol(rol: Rol): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${rol.id}`, rol).pipe(
      tap(() => console.log('Rol actualizado:', rol)),
      catchError(this.handleError)
    );
  }



  // Método para eliminar un rol
  eliminarRol(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      tap(() => console.log('Rol eliminado con ID:', id)),
      catchError(this.handleError)
    );
  }





     // Manejo de errores
private handleError(error: HttpErrorResponse) {
  let errorMessage = 'Error desconocido.';
  if (error.error instanceof ErrorEvent) {
    // Error del lado del cliente
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // Error del lado del servidor
    errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
  }
  return throwError(errorMessage);
}
}

