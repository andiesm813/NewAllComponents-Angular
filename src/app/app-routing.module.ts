import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { ErrorRoutingModule } from './error-routing/error-routing.module';
import { AllComponentsComponent } from './all-components/all-components.component';
import { CalendarComponent } from './calendar/calendar.component';

export const routes: Routes = [
  { path: 'error', component: UncaughtErrorComponent },
  { path: '', redirectTo: 'all-components', pathMatch: 'full' },
  { path: 'all-components', component: AllComponentsComponent, data: { text: 'All Components' } },
  { path: 'calendar', component: CalendarComponent, data: { text: 'Calendar' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ErrorRoutingModule],
  exports: [RouterModule, ErrorRoutingModule]
})
export class AppRoutingModule {
}
