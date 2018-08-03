import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Place } from '../../Place';
import { UserChoice } from '../../../users/UserChoice';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  @Input() places: Place[];
  @Output() choose = new EventEmitter<UserChoice>();

  constructor() { }

  ngOnInit() {
  }

  choosePlace(id: Number) {
    // TODO retrieve real userId
    const userChoice: UserChoice = { placeId: id, userId: 1}
    this.choose.emit(userChoice);
  }

}
