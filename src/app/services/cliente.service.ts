import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Cliente } from '../../interfaces/cliente';




@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  
  private apiUrl: string = `${environment.endpoint}api/Cliente`;


  constructor(private http: HttpClient) {
    console.log('URL del Usuario:', this.apiUrl);
  }



  // Método para obtener todos los clientes
  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }


  // Método para crear un nuevo cliente
  createCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, cliente).pipe(
      catchError(this.handleError)
    );
  }


  // Método para obtener un cliente por ID
getClienteById(id: number): Observable<Cliente> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<Cliente>(url).pipe(
    catchError(this.handleError)
  );
}

// Método para eliminar un cliente
deleteCliente(id: number): Observable<void> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.delete<void>(url).pipe(
    catchError(this.handleError)
  );
}





 // Método para actualizar un cliente
 updateCliente(id: number, cliente: Cliente): Observable<any> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.put(url, cliente).pipe(
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
