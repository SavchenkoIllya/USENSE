import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { IndicatorsComponent } from './login/indicators/indicators.component';
import { CustomInputComponent } from './login/custom-input/custom-input.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, IndicatorsComponent, CustomInputComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
