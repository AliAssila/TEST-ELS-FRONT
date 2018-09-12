import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SalariedComponent} from './salaried/salaried.component';

const routes: Routes = [
  { path: '', component: SalariedComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
