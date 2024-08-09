import { Injectable } from '@angular/core';
import { Propiedad } from '../../interfaces/propiedad';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PropiedadService {

  private apiUrl: string = `${environment.endpoint}api/Propiedad`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
  }


//OBTENER TODAS LAS PROPIEDADES
getAllPropiedades(): Observable<Propiedad[]> {
  return this.http.get<Propiedad[]>(this.apiUrl)
    .pipe(
      catchError(this.handleError)
    );
}

 // Agregar una nueva propiedad
 createPropiedad(propiedad: Propiedad): Observable<Propiedad> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<Propiedad>(this.apiUrl, propiedad, { headers })
    .pipe(
      catchError(this.handleError)
    );
}


// Método para obtener una propiedad por ID
getPropiedadById(id: number): Observable<Propiedad> {
  return this.http.get<Propiedad>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
}


 // Método para actualizar una propiedad existente
 updatePropiedad(id: number, propiedad: Propiedad): Observable<Propiedad> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.put<Propiedad>(`${this.apiUrl}/${id}`, propiedad, { headers })
    .pipe(
      catchError(this.handleError)
    );
}


 // Método para eliminar una propiedad por ID
 deletePropiedad(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`)
    .pipe(
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
