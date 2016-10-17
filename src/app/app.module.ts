import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientModule } from './client/client.module';

import { AppComponent } from './app.component';
import { ClientModelDrivenComponent } from './client-model-driven/client-model-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientModelDrivenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
