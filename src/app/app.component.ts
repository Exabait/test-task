import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-task';
  public isCalendar: boolean;

  public form = this.fb.group({
    defaultInput: [''],
    focused:  ['Text that User is entering|'],
    completed: ['Text entered, the input field is completed'],
    autoclear: ['Text entered, the input field is completed'],
    errorMessage: ['Text entered, the input field is completed', [Validators.maxLength(4)]],
    disabled: [''],
  });

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
  }

  public openCalendar(): void {
    this.isCalendar = true;
  }
}
