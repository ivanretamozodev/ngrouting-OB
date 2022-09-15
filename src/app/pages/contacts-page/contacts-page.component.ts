import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
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
      genre: 'hombre',
    },
    {
      id: 1,
      name: 'jose',
      lastname: 'maria',
      email: 'jose@gmail.com',
      genre: 'hombre',
    },
    {
      id: 2,
      name: 'natalia',
      lastname: 'perez',
      email: 'natalia@gmail.com',
      genre: 'mujer',
    },
  ];
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    //asi obtenemos los query params
    this.activatedRoute.queryParams.subscribe(({ genre }) =>
      console.log(genre)
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
