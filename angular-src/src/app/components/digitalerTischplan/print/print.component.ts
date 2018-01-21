import {Component, OnInit, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { TischplanComponent } from '../tischplan.component';
import { Table } from '../../../../../Table';

@Component({
  selector: 'app-print',
  templateUrl: 'print.component.html',
  styleUrls: ['../tischplan.component.css']
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

  @Output()
  getTablesOccupied:EventEmitter<number> = new EventEmitter();

  tempTablesArray: any[] = [];
  tempTablesArray2:  any[] = [];
  tempTablesArray1: any[] = [];
  tempTablesArray3: any[] = [];
  uniqueTables: any[] = [];
  tablesOccupied: number;
  tableNumbers: any[] = [];


  /*
    constructor( private sharedService: SharedService) {
      this.sharedService.caseNumber$.subscribe(
        data => {
          console.log('Sibling1Component-received from sibling2: ' + data);
          this.printToCart3(data);
        });
    }
  */
  ngOnInit() {
  }


  formatAzListe(tables) {
    console.log('tables in formatAzListe');
    console.log(tables);
    this.tables = tables;
    function filterByID(obj) {
      if ('nameValue2' in obj || 'nameValue3' in obj) {
        return true;
      } else {
        return false;
      }
    }

    this.tempTablesArray = this.tables.filter(filterByID);

    for (let i: number = 0; i < this.tables.length; i++) {
      if (this.tables[i].nameValue2 || this.tables[i].nameValue3) {
        this.tables.splice(i, 1);
      }
    }

    for (let i: number = 0; i < this.tempTablesArray.length; i++) {
      this.tempTablesArray2[i] = new Table();
    }

    for (let i: number = 0; i < this.tempTablesArray.length; i++) {
      this.tempTablesArray3[i] = new Table();
    }

    for (let i: number = 0; i < this.tempTablesArray.length; i++) {
      this.tempTablesArray1[i] = new Table();
    }

    for (let a: number = 0; a < this.tempTablesArray.length; a++) {
      if (typeof this.tempTablesArray[a].nameValue !== "undefined") {
        this.tempTablesArray2[a].nameValue = this.tempTablesArray[a].nameValue;
        this.tempTablesArray2[a].notiz2Value = this.tempTablesArray[a].notiz2Value;
        this.tempTablesArray2[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue;
        this.tempTablesArray2[a].number = this.tempTablesArray[a].number;
        this.tempTablesArray2[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue;
        this.tempTablesArray2[a].anreiseValue = this.tempTablesArray[a].anreiseValue;
        this.tempTablesArray2[a].abreiseValue = this.tempTablesArray[a].abreiseValue;
        this.tempTablesArray2[a].trace = this.tempTablesArray[a].trace;
        this.tables = this.tables.concat(this.tempTablesArray2[a]);
      }

    }

    for (let a: number = 0; a < this.tempTablesArray.length; a++) {
      if (typeof this.tempTablesArray[a].nameValue2 !== "undefined") {
        this.tempTablesArray1[a].nameValue = this.tempTablesArray[a].nameValue2;
        this.tempTablesArray1[a].notiz2Value = this.tempTablesArray[a].notiz2Value2;
        this.tempTablesArray1[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue2;
        this.tempTablesArray1[a].number = this.tempTablesArray[a].number;
        this.tempTablesArray1[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue2;
        this.tempTablesArray1[a].anreiseValue = this.tempTablesArray[a].anreiseValue2;
        this.tempTablesArray1[a].abreiseValue = this.tempTablesArray[a].abreiseValue2;
        this.tempTablesArray1[a].trace = this.tempTablesArray[a].trace2;
        this.tables = this.tables.concat(this.tempTablesArray1[a]);
      }
    }

    for (let a: number = 0; a < this.tempTablesArray.length; a++) {
      if (typeof this.tempTablesArray[a].nameValue3 !== "undefined") {
        this.tempTablesArray3[a].nameValue = this.tempTablesArray[a].nameValue3;
        this.tempTablesArray3[a].notiz2Value = this.tempTablesArray[a].notiz2Value3;
        this.tempTablesArray3[a].personenAnzahlValue = this.tempTablesArray[a].personenAnzahlValue3;
        this.tempTablesArray3[a].number = this.tempTablesArray[a].number;
        this.tempTablesArray3[a].zimmernummerValue = this.tempTablesArray[a].zimmernummerValue3;
        this.tempTablesArray3[a].anreiseValue = this.tempTablesArray[a].anreiseValue3;
        this.tempTablesArray3[a].abreiseValue = this.tempTablesArray[a].abreiseValue3;
        this.tempTablesArray3[a].trace = this.tempTablesArray[a].trace3;
        this.tables = this.tables.concat(this.tempTablesArray3[a]);

      }
    }

    console.log(this.tempTablesArray1);
    console.log(this.tempTablesArray);
    console.log(this.tempTablesArray2);
    console.log(this.tempTablesArray3);


    console.log('this.tables before sort ');
    console.log(this.tables);

    for (let i: number = 0; i < this.tables.length; i++) {
      if (!("nameValue" in this.tables[i])) {
        this.tables.splice(i,1);
      }
    }

    this.tables = this.tables.sort(function(a, b) {
      let nameA = "";
      let nameB = "";
      if (typeof a.nameValue !== "undefined" ) {
        nameA = a.nameValue.toUpperCase(); // ignore upper and lowercase
      }
      if (typeof b.nameValue !== "undefined"   ) {
        nameB = b.nameValue.toUpperCase(); // ignore upper and lowercase
      }
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });

    console.log('this.tables after sort: ');

    console.log("this.uniqueTables: ");
    console.log(this.uniqueTables);

    for (let i: number = 0; i < this.tables.length; i++) {
      console.log(i);
      if ("nameValue" in this.tables[i]) {
        console.log("--->" + i);
        this.tableNumbers.push(this.tables[i].number);
      }
    }

    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    this.uniqueTables = this.tableNumbers.filter( onlyUnique );
    this.tablesOccupied = this.uniqueTables.length;
    this.getTablesOccupied.emit(this.tablesOccupied);

    console.log(this.tables);
    console.log("this.tablesOccupied" + this.tablesOccupied);
  }
}
