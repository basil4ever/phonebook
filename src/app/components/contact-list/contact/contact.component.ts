import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Contact} from '../../../models/contact.module';
import {ContactsService} from '../../../services/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() public contact: Contact;
  @Output() remove = new EventEmitter();

  constructor(
    private contactsService: ContactsService
  ) {
  }

  ngOnInit(): void {
  }
  public removeContact(): void {
    this.contactsService.removeContact(this.contact.id);
    this.remove.emit();

  }

}
