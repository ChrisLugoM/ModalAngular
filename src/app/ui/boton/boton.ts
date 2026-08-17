import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-boton',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './boton.html',
  styleUrl: './boton.css',
})
export class Boton {
  @Input() label = '';
  @Input() icono = '';
  @Input() color = '';
  @Input() colorTexto = '';

  @Output() accion = new EventEmitter<void>();

  onClick() {
    this.accion.emit();
  }
}
