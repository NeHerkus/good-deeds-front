
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './homepage/home-page.component';
import {NewIdeaFormpageComponent} from './new-idea-formpage/new-idea-formpage.component';
import {IdeasTableComponent} from './ideas-table/ideas-table.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: 'newidea', component: NewIdeaFormpageComponent},
  {path: 'Ideastable', component: IdeasTableComponent},
  {path: 'ideastable', component: IdeastableComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
