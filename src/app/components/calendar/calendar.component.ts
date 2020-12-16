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

  constructor() { }

  ngOnInit(): void {
    this.setWeekDates(this.weekCount);
  }

  public nextWeek(): void {
    this.weekCount++;
    this.setWeekDates(this.weekCount);
  }

  public previousWeek(): void {
    this.weekCount--;
    this.setWeekDates(this.weekCount);
  }

  public isToday(day): string {
    return moment(day).isSame(Date.now(), 'date') ? 'today' : '';
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
}
