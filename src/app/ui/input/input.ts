import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'input-in',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './input.html',
  styleUrl: './input.css'
})
export class InputIn {

  @Input() label = '';
  @Input() type = 'text';
  @Input() placeholder = '';
  @Input() value = '';

  cambiarValor(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
  }
}