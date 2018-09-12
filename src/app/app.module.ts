import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {SalariedComponent} from './salaried/salaried.component';
import {AppRoutingModule} from './app-routing.module';
import {SalariedService} from './salaried/salaried.service';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from './shared/SharedModule';


@NgModule({
  declarations: [
    AppComponent,
    SalariedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [SalariedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
