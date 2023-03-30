import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PulseComponent } from './components/pulse/pulse.component';
import { TestComponent } from './test.component';

const routes: Routes = [
  {
    path: 'meeting',
    component: TestComponent,
  },
  {
    path: '',
    component: PulseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
