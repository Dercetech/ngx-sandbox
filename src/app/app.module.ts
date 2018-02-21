import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {CommonServicesModule} from './commons/common-services.module';
import {SandboxFrameworkServicesModule} from './framework/framework.services.module';

import { AppComponent } from './app.component';
import {PagesModule} from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Import pages directly (no routing happens in this project)
    PagesModule,

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
