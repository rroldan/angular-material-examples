import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerComponent } from './contactmanager.component';
import { MaterialModule } from '../shared/material.module';




@NgModule({
  declarations: [ ContactmanagerComponent ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ContactmanagerModule { }
