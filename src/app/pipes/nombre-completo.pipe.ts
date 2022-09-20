import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact.interface';

@Pipe({
  name: 'nombreCompleto',
})
export class NombreCompletoPipe implements PipeTransform {
  transform(contact: Contact, ...args: unknown[]): string {
    return `${contact.name} ${contact.lastname}`;
  }
}
