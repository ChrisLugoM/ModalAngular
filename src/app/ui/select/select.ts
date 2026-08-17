import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


export interface SelectOption {
  value: any;
  text: string;
}

@Component({
  selector: 'app-select',
  imports: [MatFormField, MatSelectModule],
  templateUrl: './select.html',
  styleUrl: './select.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Select),
      multi: true
    }
  ]
})

export class Select implements ControlValueAccessor {
  @Input() label = '';
  @Input() options: SelectOption[] = [];
  @Input() value: any = null;

  disabled = false;

  // Angular nos proporciona estas funciones
  private onChange = (value: any) => {};
  private onTouched = () => {};

  // Angular escribe un valor en nuestro Select
  writeValue(value: any): void {
    this.value = value;
  }

  // Angular nos registra esta función para recibir cambios
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Angular nos registra esta función para saber cuando tocaron el control
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Permite que Angular deshabilite el Select
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // Cuando el usuario selecciona algo
  selectionChange(value: any): void {
    this.value = value;

    // Le avisamos a Angular Forms
    this.onChange(value);
    this.onTouched();
  }
  
}
