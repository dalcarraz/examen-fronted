// user-by-category.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-by-category',
  templateUrl: './user-by-category.component.html',
  styleUrls: ['./user-by-category.component.scss']
})
export class UserByCategoryComponent implements OnInit {
  usersByCategory: any[] = []; // Lista de usuarios por categoría
  categoryName: string = ''; // Categoría seleccionada

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // No es necesario inicializar la lista de usuarios por categoría al cargar el componente
  }

  getUsersByCategory(): void {
    if (this.categoryName.trim() !== '') {
      this.userService.getUsersByCategory(this.categoryName).subscribe(
        (data) => {
          this.usersByCategory = data;
          console.log(this.usersByCategory); // Imprime los usuarios por categoría en la consola para verificar
        },
        (error) => {
          console.error('Error al obtener usuarios por categoría:', error);
        }
      );
    } else {
      console.warn('Por favor, ingrese un nombre de categoría válido.');
    }
  }
}
