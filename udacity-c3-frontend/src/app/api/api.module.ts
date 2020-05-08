import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';
//Trigger travis build
const components = [];

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: components,
  exports: components,
  providers: []
})
export class ApiModule {}
