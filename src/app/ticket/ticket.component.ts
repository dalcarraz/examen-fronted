import { Component, OnInit } from '@angular/core';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  tickets: any[] = []; // Lista de tickets
  newTicket: any = {}; // Datos del nuevo ticket

  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.loadTickets();
  }

  // Cargar lista de tickets al iniciar
  loadTickets(): void {
    this.ticketService.getTickets().subscribe(
      (data) => {
        this.tickets = data;
      },
      (error) => {
        console.error('Error al cargar los tickets:', error);
      }
    );
  }

  // Crear un nuevo ticket
  createTicket(): void {
    this.ticketService.createTicket(this.newTicket).subscribe(
      (data) => {
        console.log('Ticket creado exitosamente:', data);
        this.loadTickets(); // Recargar lista después de crear
      },
      (error) => {
        console.error('Error al crear el ticket:', error);
      }
    );
  }

  // Actualizar un ticket existente
  updateTicket(ticketId: number): void {
    const updatedData =  {
      title: 'Nuevo título', // Reemplaza con el nuevo título
      description: 'Nueva descripción', // Reemplaza con la nueva descripción
      status: 'Nuevo estado', // Reemplaza con el nuevo estado
      priority: 'Nueva prioridad' // Reemplaza con la nueva prioridad
    };
    this.ticketService.updateTicket(ticketId, updatedData).subscribe(
      (data) => {
        console.log('Ticket actualizado exitosamente:', data);
        this.loadTickets(); // Recargar lista después de actualizar
      },
      (error) => {
        console.error('Error al actualizar el ticket:', error);
      }
    );
  }

  // Eliminar un ticket
  deleteTicket(ticketId: number): void {
    this.ticketService.deleteTicket(ticketId).subscribe(
      () => {
        console.log('Ticket eliminado exitosamente');
        this.loadTickets(); // Recargar lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el ticket:', error);
      }
    );
  }
}
