import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.interface';
import { CONTACT_LIST } from '../mocks/contact/Contact.mock';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contactList: Contact[] = CONTACT_LIST;
  constructor() {}

  getContacts(genre?: string): Promise<Contact[]> {
    if (genre === 'hombre' || genre === 'mujer') {
      let filteredList: Contact[] = this.contactList.filter(
        (contact) => contact.genre === genre
      );
      return Promise.resolve(filteredList);
    } else if (genre === 'todos') {
      return Promise.resolve(this.contactList);
    } else {
      return Promise.reject('filtro no valido');
    }
  }
}
