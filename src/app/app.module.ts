import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AppComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
})
export class AppModule {}
