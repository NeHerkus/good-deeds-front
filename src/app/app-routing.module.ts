import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IdeastableComponent} from './ideastable/ideastable.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: 'Ideastable', component: IdeastableComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
