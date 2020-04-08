import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';


const routes: Routes = [
  { path: 'contactmanager', component: ContactmanagerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
