import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';
import { GreetMessageComponent } from './greet/greetMessage.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    SalaryCalculatorComponent,
    GreetMessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
