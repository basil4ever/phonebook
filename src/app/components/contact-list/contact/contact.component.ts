import {Component, Input, OnInit} from '@angular/core';
import {Contact} from '../../../models/contact.module';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input() public contact: Contact;

  constructor() { }

  ngOnInit(): void {
  }

}
