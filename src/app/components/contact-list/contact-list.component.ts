import { Component } from '@angular/core';
import {Contact} from '../../models/contact.module';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  public contacts: Contact[] =  [
    {
      name: 'Иванов Иван',
      phone: '123456789'
    },
    {
      name: 'Алексеев Алексей',
      phone: '012345678'
    }
  ];


}
