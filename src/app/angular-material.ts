// included an additional angular-material.ts file for imports from Angular Material

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule],
})
export class AngularMaterialModule {
}
