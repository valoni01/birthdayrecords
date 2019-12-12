import { Component, OnInit, Input } from "@angular/core";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  birthdays = [
    {
      name: "John Sina",
      birth: "11/30/2011"
    },
    {
      name: "Barcy Washington",
      birth: "09/16/1992"
    },
    {
      name: "Peter Parker",
      birth: "01/16/1992"
    },
    {
      name: "Jimmy Shergil",
      birth: "12/12/2001"
    },
    {
      name: "Alexander Alfred",
      birth: "02/09/1891"
    },
    {
      name: "Krishna Gupta",
      birth: "12/01/1982"
    },
    {
      name: "Sania Mirza",
      birth: "11/30/2011"
    },
    {
      name: "Lata Pathak",
      birth: "10/31/1999"
    }
  ];
  // this takes input from the radio component
  @Input() sortBy: string;
  constructor() {}

  ngOnChanges() {
    // call arrangeItems on form change
    // console.log(this.sortBy);
    this.arrangeItems();
  }

  arrangeItems() {
    // sort the `birthdays` array accordingly
    if (this.sortBy === "name") {
      this.birthdays.sort(this.compareNames);
    }
    if (this.sortBy === "age") {
      this.birthdays.sort(this.compareDates);
    }
  }

  compareDates(a, b) {
    // boolean comparator for dates
    if (new Date(a.birth) < new Date(b.birth)) return -1;
  }

  compareNames(a, b) {
    // boolean comparator for names
    if (a.name < b.name) return -1;
  }

  getDate(str: string) {
    // convert the passed date into a human readbale form
    let date = new Date(str);
    let month = date.getMonth();
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month} ${day} ${year}`;
  }
}

// @Pipe({
//     name: 'birth'
// })
// export class BirthPipe extends TableComponent implements PipeTransform {
//   transform(birthdate : string): string {
//     return this.getDate(birthdate)
//     // return;
//   }
// }
