import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ImagePlaceholderComponent } from './components/image-placeholder/image-placeholder.component';
import { CalendarComponent } from './components/calendar/calendar.component';

import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { ContentDialogComponent } from './components/content-dialog/content-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LocaleService, NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

@NgModule({
  declarations: [
    AppComponent,
    ImagePlaceholderComponent,
    CalendarComponent,
    InputComponent,
    CardComponent,
    ContentDialogComponent
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    NgxDaterangepickerMd.forRoot(),
    ReactiveFormsModule
  ],
  providers: [LocaleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
