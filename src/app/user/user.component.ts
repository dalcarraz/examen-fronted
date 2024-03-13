// user.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any[] = []; // Lista de usuarios
  newUser: any = {}; // Datos del nuevo usuario

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error al cargar los usuarios:', error);
      }
    );
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(
      (data) => {
        console.log('Usuario creado exitosamente:', data);
        this.loadUsers(); // Recargar lista después de crear
      },
      (error) => {
        console.error('Error al crear el usuario:', error);
      }
    );
  }

  updateUser(userId: number): void {
    // Implementa la lógica para actualizar un usuario
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log('Ticket eliminado exitosamente');
        this.loadUsers(); // Recargar lista después de eliminar
      },
      (error) => {
        console.error('Error al eliminar el ticket:', error);
      }
    );
  }
}
