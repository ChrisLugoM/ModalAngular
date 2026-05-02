import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EdiHeader } from './componentes/edi-header/edi-header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EdiHeader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreProyecto = 'Plantilla Edilar';
}
