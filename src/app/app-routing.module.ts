import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactListComponent} from './components/contact-list/contact-list.component';
import {ContactDetailComponent} from './components/contact-list/contact-detail/contact-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/phones', pathMatch: 'full' },
  { path: 'phones', component: ContactListComponent },
  { path: 'detail/:id', component: ContactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
