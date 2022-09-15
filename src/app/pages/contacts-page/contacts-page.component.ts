import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { Contact } from '../../models/contact.interface';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.scss'],
})
export class ContactsPageComponent implements OnInit {
  genreFilter: string = 'todos';
  contactList: Contact[] = [];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    //asi obtenemos los query params
    this.activatedRoute.queryParams.subscribe(
      ({ genre }) => (this.genreFilter = genre)
    );

    //obtenemos los contactos
    this.contactService
      .getContacts(this.genreFilter)
      .then((list) => {
        this.contactList = list;
      })
      .catch((error) =>
        console.error('ah ocurrido un error obteniendo la lista de contactos')
      );
  }

  /*
   *ejemplo de paso de informacion entre componentes a travez
   *del ESTADO
   */
  backToHome(contact: Contact) {
    let navigationExtras: NavigationExtras = {
      state: {
        data: contact,
      },
    };

    this.router.navigate(['/home'], navigationExtras);
  }
}
