import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {QuoteService} from './quote.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ServicesModule {
  static forRoot():ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        QuoteService
      ]
    }
  }
}
