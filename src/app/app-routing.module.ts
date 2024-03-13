import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component'; // Asegúrate de importar HomeComponent
import { UserByCategoryComponent } from './user-by-category/user-by-category.component'; // Importa el nuevo componente


const routes: Routes = [
  { path: 'ticket', component: TicketComponent },
  { path: 'user', component: UserComponent },
  { path: 'home', component: HomeComponent }, // Agrega esta línea
  { path: 'user-by-category', component: UserByCategoryComponent }, // Agrega esta línea
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirige a /home por defecto
  // Otras rutas si las tienes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
