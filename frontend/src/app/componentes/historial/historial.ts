import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Todos} from "./todos/todos";
import {Pendientes} from "./pendientes/pendientes";
import {Progreso} from "./progreso/progreso";
import {Completos} from "./completos/completos";
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [RouterLink,RouterOutlet, CommonModule, RouterLinkActive, Todos],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {

}
