import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './routing.module';
import {CommonServicesModule} from './commons/common-services.module';
import {SandboxFrameworkServicesModule} from './framework/framework.services.module';
import {CustomMaterialModule} from './framework/material/material.module';

import { AppComponent } from './app.component';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // View specific modules
    BrowserAnimationsModule,
    FlexLayoutModule,
    CustomMaterialModule,

    // Routing
    AppRoutingModule,

    // App-specific singletons registery
    CommonServicesModule.forRoot(),
    SandboxFrameworkServicesModule.forRoot(),

    // View models & pages
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
