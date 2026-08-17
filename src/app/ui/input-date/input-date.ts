import {Component, Input} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-inp-date',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './input-date.html',
  styleUrl: './input-date.css',
  providers: [provideNativeDateAdapter()]
})
export class InputDate {
 @Input() label = 'Fecha';
}
