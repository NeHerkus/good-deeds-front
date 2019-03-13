import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './homepage/home-page.component';
import {NewIdeaFormPageComponent} from './newideaformpage/new-idea-form-page.component';
import {NewUserFormPageComponent} from './newuserformpage/new-user-form-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'newidea', component: NewIdeaFormPageComponent},
  {path: 'newuser', component: NewUserFormPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
