import { Component, Input, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';
import {
  ContactResponse,
  RandomContact,
} from '../../models/randomUser.interface';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss'],
})
export class RandomUserComponent implements OnInit {
  @Input() randomContact: RandomContact | null = null;

  constructor() {}

  ngOnInit(): void {}
}
