import { Component } from '@angular/core';
import {Contact} from '../../models/contact.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  public contacts: Contact[] =  [
    new Contact('Иванов Иван', '123456789'),
    new Contact('Алексеев Алексей', '987654321')
  ];

  public addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
}
