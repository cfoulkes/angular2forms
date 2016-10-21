import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClientModule } from './client/client.module';

import { AppComponent } from './app.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { AddressComponent } from './address/address.component';
import { Address2Component } from './address2/address2.component';
import { TdSimpleComponent } from './td-simple/td-simple.component';
import { Address3Component } from './address3/address3.component';
import { MdSimpleComponent } from './md-simple/md-simple.component';

@NgModule({
    declarations: [
        AppComponent,
        ModelDrivenComponent,
        AddressComponent,
        Address2Component,
        TdSimpleComponent,
        Address3Component,
        MdSimpleComponent,
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
