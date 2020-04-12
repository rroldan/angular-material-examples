import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactmanagerComponent } from './contactmanager/contactmanager.component';
import { MainContentComponent } from './contactmanager/components/main-content/main-content.component';

const routes: Routes = [
  { path: 'contactmanager', component: ContactmanagerComponent,
  children: [
    { path: ':id', component: MainContentComponent },
    { path: '', component: MainContentComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
