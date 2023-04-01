import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PulseComponent } from './components/pulse/pulse.component';
import { TestComponent } from './test.component';
import { ItemsComponent } from './components/items/items.component';
import { MeetingComponent } from './components/meeting/meeting.component';
import { ActionsComponent } from './components/actions/actions.component';

const routes: Routes = [
  {
    path: '',
    component: PulseComponent,
  },
  {
    path: 'meeting',
    component: MeetingComponent,
  },
  {
    path: 'items',
    component: ItemsComponent,
  },
  {
    path: 'actions',
    component: ActionsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
