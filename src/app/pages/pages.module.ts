import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';

import {LayoutModule} from '../framework/layout/layout.module';
import {LandingComponent} from './landing/landing.component';
import {CustomMaterialModule} from '../framework/material/material.module';
import {CustomValidators} from './landing/services/custom-validators';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,

    LayoutModule,
    CustomMaterialModule
  ],
  exports: [],
  providers: [
    CustomValidators
  ]
})
export class PagesModule {}
