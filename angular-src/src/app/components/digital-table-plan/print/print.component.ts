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
  @Input('tablesWeinstube') tablesWeinstube: string;
  @Input('showWeinstubeBool') showWeinstubeBool: string;
  @Input('showBarBool') showBarBool: string;
  @Input('tablesBar') tablesBar: string;
  @Input('showTerasseBool') showTerasseBool: string;
  @Input('tablesTerasse') tablesTerasse: string;
  @Input('showSpeisesaalBool') showSpeisesaalBool: string;
  @Input('tablesSpeisesaal') tablesSpeisesaal: string;
  @Input('adult1Weinstube') adult1Weinstube: string;
  @Input('adult2Weinstube') adult2Weinstube: string;
  @Input('adult1Bar') adult1Bar: string;
  @Input('adult2Bar') adult2Bar: string;
  @Input('adult1Terasse') adult1Terasse: string;
  @Input('adult2Terasse') adult2Terasse: string;
  @Input('adult1Speisesaal') adult1Speisesaal: string;
  @Input('adult2Speisesaal') adult2Speisesaal: string;
  @Input('child1Weinstube') child1Weinstube: string;
  @Input('child1Bar') child1Bar: string;
  @Input('child1Terasse') child1Terasse: string;
  @Input('child1Speisesaal') child1Speisesaal: string;
  @Input('child2Weinstube') child2Weinstube: string;
  @Input('child2Bar') child2Bar: string;
  @Input('child2Terasse') child2Terasse: string;
  @Input('child2Speisesaal') child2Speisesaal: string;
  @Input('child3Weinstube') child3Weinstube: string;
  @Input('child3Bar') child3Bar: string;
  @Input('child3Terasse') child3Terasse: string;
  @Input('child3Speisesaal') child3Speisesaal: string;
  @Input('child4Weinstube') child4Weinstube: string;
  @Input('child4Bar') child4Bar: string;
  @Input('child4Terasse') child4Terasse: string;
  @Input('child4Speisesaal') child4Speisesaal: string;


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
