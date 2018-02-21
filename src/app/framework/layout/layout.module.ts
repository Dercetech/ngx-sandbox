import {NgModule} from '@angular/core';
import {PaddingDirective} from './directives/padding/padding.directive';

@NgModule({
  declarations: [
    PaddingDirective
  ],
  exports: [
    PaddingDirective
  ]
})

export class LayoutModule {}
