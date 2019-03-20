import {MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatTableModule, MatSelectModule, MatToolbarModule} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBarModule} from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout';


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
    MatSnackBarModule,
    MatPaginatorModule,
    MatTableModule,
    LayoutModule
  ]
})
export class AngularMaterialModule {
}
