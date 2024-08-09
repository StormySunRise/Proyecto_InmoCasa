import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment.development';
import { Proveedor } from '../../interfaces/proveedor';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private apiUrl: string = `${environment.endpoint}api/Proveedor`;

  constructor(private http: HttpClient) {
    console.log('URL de la API:', this.apiUrl);
  }

  // Método para obtener todos los proveedores
  getAllProveedores(): Observable<Proveedor[]> {
    return this.http.get<Proveedor[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

    // Método para agregar un nuevo proveedor
    agregarProveedor(proveedor: Proveedor): Observable<Proveedor> {
      return this.http.post<Proveedor>(this.apiUrl, proveedor).pipe(
        catchError(this.handleError)
      );
    }


  // Método para obtener proveedores filtrados
  getProveedoresFiltrados(nombre: string = '', tipo: string = '', email: string = ''): Observable<Proveedor[]> {
    // Construir los parámetros de consulta
    const params = new HttpParams()
      .set('nombre', nombre)
      .set('tipo', tipo)
      .set('email', email);

    return this.http.get<Proveedor[]>(`${this.apiUrl}/filtrados`, { params }).pipe(
      catchError(this.handleError)
    );
  }

// Método para eliminar un proveedor
eliminarProveedor(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
    catchError(this.handleError)
  );
}

 // Método para obtener un proveedor por ID
 obtenerProveedorPorId(id: number): Observable<Proveedor> {
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<Proveedor>(url).pipe(
    catchError(this.handleError)
  );
}

// Método para editar un proveedor
editarProveedor(proveedor: Proveedor): Observable<Proveedor> {
  const url = `${this.apiUrl}/${proveedor.id}`;
  return this.http.put<Proveedor>(url, proveedor).pipe(
    catchError(this.handleError)
  );
}





  // Manejo de errores HTTP
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    console.error(errorMessage); // Log the error to the console
    return throwError(errorMessage); // Return an observable with a user-facing error message
  }
}
