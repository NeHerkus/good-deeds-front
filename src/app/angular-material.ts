// included an additional angular-material.ts file for imports from Angular Material

import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule, MatCheckboxModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material';

@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatToolbarModule,
    MatSnackBarModule
  ]
})
export class AngularMaterialModule {
}
