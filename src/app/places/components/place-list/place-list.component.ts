import { Component, OnInit, Input } from '@angular/core';

import { Place } from '../../Place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  @Input() places: Place[];

  constructor() { }

  ngOnInit() {
  }

}
