import {ModuleWithProviders, NgModule} from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class SandboxFrameworkServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SandboxFrameworkServicesModule,
      providers: [

      ]
    };
  }
}
