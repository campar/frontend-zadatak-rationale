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
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

import { HttpClientModule } from '@angular/common/http';
import { CardItemComponent } from './components/card-item/card-item.component';
import { PopoverComponent } from './components/popover/popover.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { CreateQuickItemFormComponent } from './components/create-quick-item-form/create-quick-item-form.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './components/items/items.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { ActionsComponent } from './components/actions/actions.component';
import { PulseInfoCardComponent } from './components/pulse-info-card/pulse-info-card.component';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { LoremComponent } from './components/lorem/lorem.component';
import { StopPropagationDirective } from './directives/stop-propagation.directive';

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
    ProgressbarComponent,
    CardItemComponent,
    PopoverComponent,
    ClickOutsideDirective,
    CreateQuickItemFormComponent,
    ModalComponent,
    ItemsComponent,
    MeetingComponent,
    ActionsComponent,
    PulseInfoCardComponent,
    LoremComponent,
    StopPropagationDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
