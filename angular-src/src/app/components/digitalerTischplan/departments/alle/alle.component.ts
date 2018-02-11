import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-alle',
  templateUrl: 'alle.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class AlleComponent implements OnInit {

  @Input('tablesPanorama') tablesPanorama: Table[];
  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: Table[];
  @Input('tablesRestaurant') tablesRestaurant: Table[];
  @Input('tablesWintergarten') tablesWintergarten: Table[];
  @Input('showAlleBool') showAlleBool: boolean;
  @Input('term') term: string;
  @Input('tables') tables: any;

  @Output()
  occupied:EventEmitter<any> = new EventEmitter();
  dateGenerated: any;

  constructor() {
    this.dateGenerated = new Date();
  }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

  getStyle(j) {
    if (j != "-") {
      return "solid 3px red";
    } else {
      return "";
    }
  }


}
