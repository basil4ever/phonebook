import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ContactComponent } from './components/contact-list/contact/contact.component';
import { AddContactFormComponent } from './components/contact-list/add-contact-form/add-contact-form.component';
import { ContactDetailComponent } from './components/contact-list/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactComponent,
    AddContactFormComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
