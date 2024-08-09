import { Injectable } from '@angular/core';
import { Solicitud } from '../../interfaces/solicitud';
import { environment } from '../../environments/environment.development';
import { catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  private apiUrl: string = `${environment.endpoint}api/Solicitud`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
  }

// Obtener todas las solicitudes
getSolicitudes(): Observable<Solicitud[]> {
  return this.http.get<Solicitud[]>(this.apiUrl).pipe(
    catchError(this.handleError)
  );
}


//Agregar todas las solicitudes
addSolicitud(solicitud: Solicitud): Observable<Solicitud> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Solicitud>(this.apiUrl, solicitud, { headers }).pipe(
    catchError(this.handleError)
  );
}


getSolicitudPorId(id: number): Observable<Solicitud> {
  return this.http.get<Solicitud>(`${this.apiUrl}/${id}`).pipe(
    catchError(this.handleError)
  );
}

editarSolicitud(solicitud: Solicitud): Observable<any> {
  return this.http.put(`${this.apiUrl}/${solicitud.id}`, solicitud, {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }).pipe(
    catchError(this.handleError)
  );
}


//ELIMINAR SOLICITUD
eliminarSolicitud(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`).pipe(
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

