import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimeSheetRoutingModule } from './time-sheet-routing.module';
import { TimeSheetComponent } from './time-sheet/time-sheet.component';


@NgModule({
  declarations: [TimeSheetComponent],
  imports: [
    CommonModule,
    TimeSheetRoutingModule
  ]
})
export class TimeSheetModule { }
