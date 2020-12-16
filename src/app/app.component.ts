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
    focused:  [''],
    completed: [''],
    autoclear: [''],
    errorMessage: ['', [Validators.maxLength(4)]],
    disabled: [''],
  });

  constructor(private fb: FormBuilder) {}


  ngOnInit(): void {
  }

  public openCalendar(): void {
    this.isCalendar = true;
  }
}
