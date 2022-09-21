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
  constructor(private randomUser: RandomUserService) {}

  ngOnInit(): void {
    this.randomUser
      .getRandomContact()
      .subscribe((response: ContactResponse) => {
        this.randomContact = response.results[0];
      });
  }

  obtainNewContact(): void {
    this.randomUser.getRandomContact().subscribe(
      (response: ContactResponse) => {
        this.randomContact = response.results[0];
      },
      (error) => console.log(`ha ocurrido un error ${error}`)
    );
  }
}
