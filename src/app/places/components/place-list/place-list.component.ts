import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

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
  @Input() userId: Number;
  @Input() pseudo;
  @Input() userChoices: UserChoice[];
  @Input() votes: any;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  choosePlace(placeId: Number) {
    const userChoice: UserChoice = { placeId: placeId, userId: this.userId, pseudo: this.pseudo };
    this.choose.emit(userChoice);
  }
}
