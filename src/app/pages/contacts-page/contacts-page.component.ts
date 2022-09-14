import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  contactList: Contact[] = [
    {
      id: 0,
      name: 'pepe',
      lastname: 'elguapo',
      email: 'pepe@gmail.com',
    },
    {
      id: 1,
      name: 'jose',
      lastname: 'maria',
      email: 'jose@gmail.com',
    },
    {
      id: 2,
      name: 'natalia',
      lastname: 'perez',
      email: 'natalia@gmail.com',
    },
    {
      id: 4,
      name: 'carlos',
      lastname: 'garcia',
      email: 'carlos@gmail.com',
    },
    {
      id: 5,
      name: 'lucas',
      lastname: 'gimenez',
      email: 'lucas@gmail.com',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
