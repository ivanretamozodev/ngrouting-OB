import { Component, OnInit } from '@angular/core';
import {
  RandomContact,
  ContactResponse,
} from '../../models/randomUser.interface';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-random-contacts',
  templateUrl: './random-contacts.component.html',
  styleUrls: ['./random-contacts.component.scss'],
})
export class RandomContactsComponent implements OnInit {
  randomContact: RandomContact | null = null;
  randomContactList: RandomContact[] | null = null;

  constructor(private randomUser: RandomUserService) {}

  ngOnInit(): void {
    this.randomUser.getRandomContact().subscribe({
      next: (response: ContactResponse) =>
        (this.randomContact = response.results[0]),
      error: (error) => console.error(`ha ocurrido este error: ${error}`),
      complete: () => console.log('petición de contacto terminada'),
    });
  }

  getNewContact() {
    this.randomUser.getRandomContact().subscribe({
      next: (response: ContactResponse) =>
        (this.randomContact = response.results[0]),
      error: (error) => console.error(`ha ocurrido este error: ${error}`),
      complete: () => console.log('petición de contacto terminada'),
    });
  }

  getListContacts(n: number) {
    return this.randomUser.getRandomContacts(n).subscribe({
      next: (response: RandomContact[]) => {
        this.randomContactList = response;
        console.log(this.randomContactList);
      },
      error: (error) => console.error(`ha ocurrido este error: ${error}`),
      complete: () => console.log('petición de lista de contactos terminada'),
    });
  }
}
