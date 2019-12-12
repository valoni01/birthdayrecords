import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-radio",
  templateUrl: "./radio.component.html",
  styleUrls: ["./radio.component.css"]
})
export class RadioComponent {
  @Output() sortvalue = new EventEmitter();

  model;
  constructor() {
    this.model = {
      sortBy: ""
    };
  }

  returnModelState(e) {
    //return the the model.sortBy vale
    this.model.sortBy = e.target.value;
    this.sortvalue.emit(e.target.value);
    return this.model.sortBy;
  }
}
