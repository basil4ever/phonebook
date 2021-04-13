import {Component, OnInit} from '@angular/core';
import {Contact} from '../../../models/contact.module';
import {ActivatedRoute} from '@angular/router';
import {ContactsService} from '../../../services/contacts.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  public contact: Contact;
  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(id);
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.contactsService.updateContactById(this.contact.id, this.contact);
    this.location.back();
  }
}
