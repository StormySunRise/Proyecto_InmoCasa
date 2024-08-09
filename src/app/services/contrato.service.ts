import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Contrato } from '../../interfaces/contrato';


@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private apiUrl: string = `${environment.endpoint}api/Contrato`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
    
  }

  //Obtenet todos los contratos
  getAllContratos(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  //Agregar contrato
  createContrato(contrato: Contrato): Observable<Contrato> {
    return this.http.post<Contrato>(this.apiUrl, contrato)
      .pipe(
        catchError(this.handleError)
      );
  }


 // Eliminar contrato
 deleteContrato(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`)
    .pipe(
      catchError(this.handleError)
    );
}


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
