import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {
  model;
  constructor() {
    this.model = {
      sortBy: ""
    }
  }

  returnModelState() {
    //return the the model.sortBy vale
    return "";
  }
}
