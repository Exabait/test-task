import { Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('inputElement') inputElement: ElementRef;

  @Input() label = '';
  @Input() clear: boolean;
  @Input() autocomplete: boolean;
  @Input() disabled: boolean;
  @Input() errorMessage: string;

  @Input() value: string | number = '';
  @Output() valueChange = new EventEmitter();

  private onChange: (value: string | number) => void;
  private onTouched: () => void;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.inputElement);
  }

  doChange(value: string | number): void {
    this.onChange?.(value);
  }

  writeValue(value: string | number): void {
    this.value = value;
    this.valueChange.emit(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

}
