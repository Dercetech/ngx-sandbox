import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LandingComponent} from './pages/landing/landing.component';

const appRoutes: Routes = [

  // Default page: display login component unless an authentication token is present in local storage
  { path: '', component: LandingComponent,
    data: { },
    canActivate: []
  }
/*
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'TBD'},
      { path: 'TBD', component: DashboardComponent, data: {}, canActivate: [] },
    ]
*/

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false, enableTracing: false })
  ],
  exports: [
    RouterModule    // configured router module
  ]
})

export class AppRoutingModule {

}
