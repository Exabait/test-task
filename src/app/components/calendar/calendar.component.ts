import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  private weekCount = 0;
  public weekDates = [];
  public month;
  // public weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() { }

  ngOnInit(): void {
    this.setMonth();
    this.setWeekDates(this.weekCount);

    console.log(this.month);
  }

  public nextMonth(): void {
    this.weekCount++;
    this.setWeekDates(this.weekCount);
  }

  public previousMonth(): void {
    this.weekCount--;
    this.setWeekDates(this.weekCount);
  }

  private setWeekDates(weekCount: number): void {
    this.weekDates = [];

    const startOfWeek = moment().add(weekCount, 'week').startOf('week');
    const endOfWeek = moment().add(weekCount, 'week').endOf('week');

    let day = startOfWeek;

    while (day <= endOfWeek) {
      this.weekDates.push(day.toDate());
      day = day.clone().add(1, 'd');
    }
  }

  setMonth(): void {
    this.month = moment(this.weekDates[0]).toDate();
  }
}
