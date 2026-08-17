import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-check',
  imports: [FormsModule, MatCheckboxModule],
  templateUrl: './check.html',
  styleUrl: './check.css',
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => Check),
      multi: true
    }
  ]
})
export class Check implements ControlValueAccessor {
  @Input() label: string = 'Checador';
  checked: boolean = false;
  disabled: boolean = false;

  private onChange = (value: boolean) => {};
  private onTouched = () => {};

  writeValue(value: boolean): void {
    this.checked = value ?? false;
  }

  registerOnChange(fn: (value: boolean) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  onCheckboxChange(value: boolean): void {
    this.checked = value;
    this.onChange(value);
    this.onTouched();
  }
}
