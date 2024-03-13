// app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Agrega esta importación

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/user.service';
import { HomeComponent } from './home/home.component';
import { UserByCategoryComponent } from './user-by-category/user-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    UserComponent,
    HomeComponent,
    UserByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Agrega HttpClientModule aquí
  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
