import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './homepage/home-page.component';
import {NewIdeaFormpageComponent} from './newideaformpage/new-idea-formpage.component';
import {NewUserFormpageComponent} from './newuserformpage/new-user-formpage.component';
import {LoginSignupPageComponent} from './loginsignuppage/login-signup-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'newidea', component: NewIdeaFormpageComponent},
  {path: 'newuser', component: NewUserFormpageComponent},
  {path: 'login', component: LoginSignupPageComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
