import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../../Table';
import {Pipe, PipeTransform} from "@angular/core";


@Pipe({
  name: 'filter',
})

@Component({
  selector: 'app-all',
  templateUrl: 'all.component.html',
  styleUrls: ['../../main.component.css']
})
export class AllComponent  implements PipeTransform {

  @Input('showAllBool') showAllBool: boolean;
  @Input('term') term: string;
  @Input('tables') tables: any;
  @Input('tablesTempDeparture') tablesTempDeparture: any;

  @Output()
  occupied:EventEmitter<any> = new EventEmitter();
  dateGenerated: any;

  constructor() {
  console.log("this.tables in allcomponent");
    //console.log(this.tables);
    console.log("this.tablesTempDeparture in allcomponent");
    console.log(this.tablesTempDeparture);
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

  transform(tables: Array<any>, term: any) {
    console.log("term");
    console.log(term);
    if (Array.isArray(tables) && tables.length && term && term.length) {
      this.tables = tables.filter(item => {
        console.log(item);
        let keys = Object.keys(item);
        console.log(keys);
        if (Array.isArray(keys) && keys.length) {
          for (let key of keys) {
            if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
              return true;
            }
          }
          return false;
        } else {
          return false;
        }
      });
    } else {
      return tables;
    }
  }
}
