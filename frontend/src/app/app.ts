import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; // <-- Sumamos esta por las dudas
import { AppIngresoTareaComponent } from './ingreso-tarea/ingreso-tarea'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ReactiveFormsModule, AppIngresoTareaComponent], // <-- La agregamos acá también
  templateUrl: './app.html',
  styleUrls: ['./app.css']
 })
export class App {
  title = 'frontend';
}