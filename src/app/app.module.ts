import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientModule } from './client/client.module';

import { AppComponent } from './app.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { AddressComponent } from './address/address.component';

@NgModule({
    declarations: [
        AppComponent,
        ModelDrivenComponent,
        AddressComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        ClientModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
