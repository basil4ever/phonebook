import { Injectable } from '@angular/core';
import {Contact} from '../models/contact.module';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  private contacts: Contact[] = [];
  public updateContacts(): Contact[] {
    this.contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    return this.contacts;
  }
  public addContact(contact: Contact): void {
    this.contacts.push(contact);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
  public removeContact(id: string): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
