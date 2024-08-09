import { Injectable } from '@angular/core';
import { Verificacion } from '../../interfaces/verificacion';
import { catchError,tap  } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';





@Injectable({
  providedIn: 'root'
})
export class VerifiService {

  private apiUrl: string = `${environment.endpoint}api/Verificacion`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
  }


  
//Método para agregar verificación
agregarVerificacion(verificacion: Verificacion): Observable<Verificacion> {
  return this.http.post<Verificacion>(this.apiUrl, verificacion)
    .pipe(
      tap((nuevaVerificacion: Verificacion) => console.log('Verificación agregada:', nuevaVerificacion)),
      catchError(this.handleError)
    );
}

  // Método para obtener todas las verificaciones
  obtenerTodasLasVerificaciones(): Observable<Verificacion[]> {
    return this.http.get<Verificacion[]>(this.apiUrl)
      .pipe(
        tap(verificaciones => console.log('Verificaciones obtenidas:', verificaciones)),
        catchError(this.handleError)
      );
  }


    // Método para obtener verificación por ID
    obtenerVerificacionPorId(id: number): Observable<Verificacion> {
      const url = `${this.apiUrl}/${id}`;
      return this.http.get<Verificacion>(url)
        .pipe(
          tap(verificacion => console.log(`Verificación obtenida: ${verificacion}`)),
          catchError(this.handleError)
        );
    }


  // Método para actualizar verificación
  actualizarVerificacion(id: number, verificacion: Verificacion): Observable<Verificacion> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Verificacion>(url, verificacion)
      .pipe(
        tap((verificacionActualizada: Verificacion) => console.log(`Verificación actualizada: ${verificacionActualizada}`)),
        catchError(this.handleError)
      );
  }


  // Método para eliminar verificación
  eliminarVerificacion(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url)
      .pipe(
        tap(() => console.log(`Verificación eliminada con id: ${id}`)),
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
