import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';

import {LayoutModule} from '../framework/layout/layout.module';
import {CustomMaterialModule} from '../framework/material/material.module';

import {LandingComponent} from './landing/landing.component';
import {SwitchMapComponent} from './operators/switch-map/switch-map.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    LandingComponent,
    SwitchMapComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    LayoutModule,
    CustomMaterialModule
  ],
  exports: [],
})
export class PagesModule {}
