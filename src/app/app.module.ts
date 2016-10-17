import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientModule } from './client/client.module';

import { AppComponent } from './app.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    ModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    ClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
