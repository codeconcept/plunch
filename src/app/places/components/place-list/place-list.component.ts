import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { Place } from '../../Place';
import { UserChoice } from '../../../users/UserChoice';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit, OnChanges {
  @Input() places: Place[];
  @Output() choose = new EventEmitter<UserChoice>();
  @Input() userId: Number;

  constructor() { }

  ngOnInit() {
    console.log('>>> ngOnInit ')
  }

  choosePlace(placeId: Number) {
    console.log('choosePlace() >>> this.userId', this.userId);
    if(this.userId === undefined) return;
    const userChoice: UserChoice = { placeId: placeId, userId: this.userId }
    this.choose.emit(userChoice);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('>>> ngOnChanges >>> userId change', changes.userId);
  }

}
