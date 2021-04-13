import { Injectable } from '@angular/core';
import {Contact} from '../models/contact.module';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() {
  }

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

  public getContactById(id: string): Contact {
    return this.contacts.filter(contact => contact.id === id)[0];
  }
  public updateContactById(id: string, contact: Contact): void {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].id === id){
        this.contacts[i] = contact;
      }
    }
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}
