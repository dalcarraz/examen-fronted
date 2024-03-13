import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private apiUrl = 'http://localhost:8080/ticket'; // Reemplaza con la URL correcta de tu API

  constructor(private http: HttpClient) { }

  // Obtener lista de tickets
  getTickets(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Crear un nuevo ticket
  createTicket(ticketData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<any>(this.apiUrl, ticketData, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      console.error('Error del lado del cliente:', error.error.message);
    } else {
      // El backend devolvió un código de error
      console.error(`Código de error ${error.status}, cuerpo: ${error.error}`);
    }

    // Retorna un mensaje de error observable con un mensaje amigable
    return throwError('Algo salió mal. Por favor, inténtalo de nuevo más tarde.');
  }


  // Actualizar un ticket existente
  updateTicket(ticketId: number, ticketData: any): Observable<any> {
    const url = `${this.apiUrl}/${ticketId}`;
    return this.http.put<any>(url, ticketData)
      .pipe(
        catchError(this.handleError)
      );
  }

  // Eliminar un ticket
  deleteTicket(ticketId: number): Observable<any> {
    const url = `${this.apiUrl}/${ticketId}`;
    return this.http.delete<any>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

}
