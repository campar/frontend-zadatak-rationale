import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PulseComponent } from './components/pulse/pulse.component';
import { CalendarListComponent } from './containers/calendar-list.component';
import { MeetingCardComponent } from './components/meeting-card/meeting-card.component';
import { CalendarSidebarComponent } from './components/calendar-sidebar/calendar-sidebar.component';
import { PulseTableComponent } from './containers/pulse-table/pulse-table.component';
import { ItemRowComponent } from './components/item-row/item-row.component';

@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    HeaderComponent,
    PulseComponent,
    CalendarListComponent,
    MeetingCardComponent,
    CalendarSidebarComponent,
    PulseTableComponent,
    ItemRowComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
