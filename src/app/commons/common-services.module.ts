import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})

export class CommonServicesModule {

  static forRoot(): ModuleWithProviders {
    return{
      ngModule: CommonServicesModule,
      providers: [
        /* put common singletons in */
      ]
    };
  }
}
