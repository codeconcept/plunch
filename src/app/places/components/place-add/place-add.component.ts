import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Place } from '../../Place';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {
  placeForm: FormGroup;
  @Output() create = new EventEmitter<Place>();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.placeForm = this.formBuilder.group({
      placeName: ['', [Validators.required]],
      placeStreet: '',
      placeTown: ['', [Validators.required]],
      placeZip: ''
    })
  }

  savePlace(form: FormGroup) {
    if(form.valid) {
      console.log(form.value);
      const place = {...form.value, id: this.generateUUID()};
      console.log(place);
      this.create.emit(place);
      form.reset();
    }
  }

  generateUUID() {
    // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
    var d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function'){
        d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}

}
