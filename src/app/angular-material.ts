// included an additional angular-material.ts file for imports from Angular Material


import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatIconModule]
})
export class AngularMaterialModule {
}
