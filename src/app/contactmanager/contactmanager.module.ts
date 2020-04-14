import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerComponent } from './contactmanager.component';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from '../app-routing.module';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';

@NgModule({
  declarations: [ ContactmanagerComponent, ToolbarComponent, MainContentComponent, SidenavComponent, NotesComponent ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ],
  providers: [UserService]
})
export class ContactmanagerModule { }
