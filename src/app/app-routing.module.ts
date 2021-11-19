import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'time-sheet',
    pathMatch: 'full'
  },
  {
    path: 'time-sheet',
    loadChildren: './time-sheet/time-sheet.module#TimeSheetModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
