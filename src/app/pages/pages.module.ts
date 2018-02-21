import {NgModule} from '@angular/core';

import {LayoutModule} from '../framework/layout/layout.module';

import {FlexLayoutModule} from '@angular/flex-layout';
import {LandingComponent} from './landing/landing.component';
import {CustomMaterialModule} from '../framework/material/material.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    FlexLayoutModule,
    LayoutModule,
    CustomMaterialModule
  ],
  exports: [],
})
export class PagesModule {}
