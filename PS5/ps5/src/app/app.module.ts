import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModuleComponent } from './forms-module/forms-module.component';
import { FarbleComponentComponent } from './farble-component/farble-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsModuleComponent,
    FarbleComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
