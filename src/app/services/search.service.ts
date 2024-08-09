import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError,tap  } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { SearchResult } from '../../interfaces/searchresult';


@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private apiUrl: string = `${environment.endpoint}api/SearchController`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
  }




  search(searchTerm: string): Observable<SearchResult> {
    return this.http.get<SearchResult>(`${this.apiUrl}?searchTerm=${searchTerm}`)
      .pipe(
        tap(data => console.log('Datos de búsqueda recibidos:', data)),
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


