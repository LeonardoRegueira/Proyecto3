import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './historial.html',
  styleUrl: './historial.css',
})
export class Historial {

}
