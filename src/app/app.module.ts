import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{TimeSheetModule}from'./time-sheet/time-sheet.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NoopAnimationsModule,
    TimeSheetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
