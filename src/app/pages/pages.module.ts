import {NgModule} from '@angular/core';

import {LayoutModule} from '../framework/layout/layout.module';

import {LandingComponent} from './landing/landing.component';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    LayoutModule
  ],
  exports: [],
})
export class PagesModule {}
