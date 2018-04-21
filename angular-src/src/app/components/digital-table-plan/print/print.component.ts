import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { MainComponent } from '../main.component';
import { Table } from '../../../../../Table';

@Component({
  selector: 'app-print',
  templateUrl: 'print.component.html',
  styleUrls: ['../main.component.css']
})

export class PrintComponent {

  @Input('tables') tables: Table[];
  @Input('dateGeneratedListe') dateGeneratedListe: string;
  @Input('tablesPanorama') tablesPanorama: string;
  @Input('showPanoramaBool') showPanoramaBool: string;
  @Input('showRestaurantBool') showRestaurantBool: string;
  @Input('tablesRestaurant') tablesRestaurant: string;
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: string;
  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: string;
  @Input('showWintergartenBool') showWintergartenBool: string;
  @Input('tablesWintergarten') tablesWintergarten: string;
  @Input('adultPanorama') adultPanorama: string;
  @Input('adultRestaurant') adultRestaurant: string;
  @Input('adultSonnbergZirbn') adultSonnbergZirbn: string;
  @Input('adultWintergarten') adultWintergarten: string;
  @Input('childPanorama') childPanorama: string;
  @Input('childRestaurant') childRestaurant: string;
  @Input('childSonnbergZirbn') childSonnbergZirbn: string;
  @Input('childWintergarten') childWintergarten: string;

  @Output()
  getTablesOccupied:EventEmitter<number> = new EventEmitter();
  @Output()
  getTablesforAzListe:EventEmitter<any> = new EventEmitter();

  tempTablesArray: any[] = [];
  tempTablesArray2:  any[] = [];
  tempTablesArray1: any[] = [];
  tempTablesArray3: any[] = [];
  uniqueTables: any[] = [];
  tablesOccupied: number;
  tableNumbers: any[] = [];
  trace: boolean;
  tableTemp: any[] = [];
  object: any;

  ngOnInit() {
  }


  constructor(){
    this.trace = false;
  }

  public formatAzList(tables) {

    this.tables = tables;
    this.tableNumbers = [];
    this.uniqueTables = [];
    this.tableTemp = [];

    //(<any>Object).assign( this.photos, photos )

    for (let i: number = 0; i < this.tables.length; i++) {
      if (this.tables[i].groups) {
        for (let j: number = 0; j < this.tables[i].groups.length; j++) {

          let tempObject = {
            number: this.tables[i].number,
            department: this.tables[i].department,
            bgColor: this.tables[i].bgColor,
            isOccupied: this.tables[i].isOccupied,
            placeholder: this.tables[i].placeholder,
            border: this.tables[i].border,
          };

          if (this.tables[i].groups[j]) {
            //console.log(this.tables[i].number);
            this.object = Object.assign(this.tables[i].groups[j], tempObject);
            //console.log("this.object");
            //console.log(this.object);
            this.tableTemp.push(this.object);
          }
        }
      }
    }

    //console.log("this.tableTemp");
    //console.log(this.tableTemp);


    this.tables =  this.tableTemp.sort(function(a, b) {
      let nameA = "";
      let nameB = "";
      if (typeof a.nameValue !== "undefined" && a.nameValue !== null) {
        nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
      }
      if (typeof b.nameValue !== "undefined" && b.nameValue !== null) {
        nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
      //}
    });

    for (let i: number = 0; i < this.tables.length; i++) {
      //console.log(i);
      if ("nameValue" in this.tables[i]) {
        //console.log("--->" + i);
        this.tableNumbers.push(this.tables[i].number);
      }
    }

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    this.uniqueTables = this.tableNumbers.filter( onlyUnique );
    this.tablesOccupied = this.uniqueTables.length;

    this.getTablesOccupied.emit(this.tablesOccupied);
    this.getTablesforAzListe.emit(this.tables);

  }

  getStyle(a) {
    //console.log("a");
    //console.log(a);
    if (typeof a === "undefined") {
      return "solid 3px rgb(243, 239, 228)";
    } else {
      for (let b = 0; b < a.length; b++) {
        //console.log("getStyle for loop a[b].traceValue");
        //console.log(a[b].traceValue);
        if (a[b].traceValue != "Empty" || a[b].newTraceText) {
          this.trace = true;
        }
      }
      if (this.trace) {
        this.trace = false;
        return "solid 3px red";
      } else {
        return "solid 3px rgb(243, 239, 228)";
      }
    }
  }
}
