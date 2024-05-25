// src/app/app.module.ts

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angularMaterialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AngularMaterialModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
       
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }