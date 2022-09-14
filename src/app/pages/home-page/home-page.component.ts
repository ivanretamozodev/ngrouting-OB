import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../../models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}
  token: string | null = null;
  selectedContact: Contact | string = 'Stranger';

  ngOnInit(): void {
    /*
     * comprobamos si existe un token en el sessionStorage
     */

    this.token = sessionStorage.getItem('token');

    /*
     * leemos el estado del hostorial de navegación
     */
    if (history.state.data) {
      console.log(history.state.data);
      this.selectedContact = history.state.data.name;
    }
  }

  navigateTo() {
    this.router.navigate(['/contacts']);
  }
}
