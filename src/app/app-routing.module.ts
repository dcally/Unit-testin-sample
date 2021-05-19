import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AlertButComponent } from './alert-but/alert-but.component';


const routes: Routes = [
  { path: 'button', component: AlertButComponent },
  { path: '', redirectTo: '/button', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
