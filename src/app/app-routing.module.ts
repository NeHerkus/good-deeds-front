import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewIdeaFormpageComponent} from './new-idea-formpage/new-idea-formpage.component';

const routes: Routes = [
  {path: 'newidea', component: NewIdeaFormpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
