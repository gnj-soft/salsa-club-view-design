import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule,
  MatMenuModule, 
  MatSidenavModule, 
  MatSelectModule,
  MatDatepickerModule,
  MatInputModule, 
  MatNativeDateModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule, 
    MatSidenavModule, 
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule, 
    MatNativeDateModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatMenuModule, 
    MatSidenavModule, 
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule, 
    MatNativeDateModule
  ],
  declarations: []
})
export class MyOwnMaterialModule { }
