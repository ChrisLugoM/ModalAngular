import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EdiHeader } from './componentes/edi-header/edi-header';
import { EdiBody } from './componentes/edi-body/edi-body';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EdiHeader, EdiBody],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombreProyecto = 'Plantilla Edilar';
}
