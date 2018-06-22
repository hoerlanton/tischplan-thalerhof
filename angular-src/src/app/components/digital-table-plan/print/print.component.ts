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
  @Input('adult1Bar') adult1Bar: string;
  @Input('adult1Terasse') adult1Terasse: string;
  @Input('adult1Speisesaal') adult1Speisesaal: string;
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
  tablesTerasseSortedByDate: Table[];
  sumOfGuests: any[] = [];
  sumErwRestaurant: number;
  sumKi1Restaurant: number;
  sumKi2Restaurant: number;
  sumKi3Restaurant: number;
  sumKi4Restaurant: number;
  sumOfGuestsHP: any[] = [];
  sumOfGuestsF: any[] = [];
  sumErwRestaurantHP: number;
  sumKi1RestaurantHP: number;
  sumKi2RestaurantHP: number;
  sumKi3RestaurantHP: number;
  sumKi4RestaurantHP: number;
  sumErwRestaurantF: number;
  sumKi1RestaurantF: number;
  sumKi2RestaurantF: number;
  sumKi3RestaurantF: number;
  sumKi4RestaurantF: number;

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
    this.tablesTerasseSortedByDate = tables;
    this.sumOfGuests = [0,0,0,0,0];
    this.sumErwRestaurant = 0;
    this.sumKi1Restaurant = 0;
    this.sumKi2Restaurant = 0;
    this.sumKi3Restaurant = 0;
    this.sumKi4Restaurant = 0;
    this.sumOfGuestsF = [0,0,0,0,0];
    this.sumErwRestaurantF = 0;
    this.sumKi1RestaurantF = 0;
    this.sumKi2RestaurantF = 0;
    this.sumKi3RestaurantF = 0;
    this.sumKi4RestaurantF = 0;
    this.sumOfGuestsHP = [0,0,0,0,0];
    this.sumErwRestaurantHP = 0;
    this.sumKi1RestaurantHP = 0;
    this.sumKi2RestaurantHP = 0;
    this.sumKi3RestaurantHP = 0;
    this.sumKi4RestaurantHP = 0;

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

            this.sumOfGuests = this.tables[i].groups[j].numberOfPersonsValue.match(/\d+/g);
            if (this.tables[i].groups[j].priceValue.indexOf("H") != -1) {
              this.sumOfGuestsHP = this.tables[i].groups[j].numberOfPersonsValue.match(/\d+/g);
            } else if (this.tables[i].groups[j].priceValue.indexOf("F") != -1) {
              this.sumOfGuestsF = this.tables[i].groups[j].numberOfPersonsValue.match(/\d+/g);
            }

            if (this.sumOfGuestsHP != null) {
              //console.log(erwKi);
              this.sumErwRestaurantHP += Number(this.sumOfGuestsHP[0]);
              this.sumKi1RestaurantHP += Number(this.sumOfGuestsHP[1]);
              this.sumKi2RestaurantHP += Number(this.sumOfGuestsHP[2]);
              this.sumKi4RestaurantHP += Number(this.sumOfGuestsHP[3]);
              this.sumKi4RestaurantHP += Number(this.sumOfGuestsHP[4]);

              //console.log("this.object");
              //console.log(this.object);
              this.sumOfGuestsHP = [0,0,0,0,0];
            }

            if (this.sumOfGuestsF != null) {
              console.log(this.sumOfGuestsF);
              this.sumErwRestaurantF += Number(this.sumOfGuestsF[0]);
              this.sumKi1RestaurantF += Number(this.sumOfGuestsF[1]);
              this.sumKi2RestaurantF += Number(this.sumOfGuestsF[2]);
              this.sumKi3RestaurantF += Number(this.sumOfGuestsF[3]);
              this.sumKi4RestaurantF += Number(this.sumOfGuestsF[4]);

              //console.log("this.object");
              //console.log(this.object);
              this.sumOfGuestsF = [0,0,0,0,0];
            }

            if (this.sumOfGuests != null) {
              //console.log(erwKi);
              this.sumErwRestaurant += Number(this.sumOfGuests[0]);
              this.sumKi1Restaurant += Number(this.sumOfGuests[1]);
              this.sumKi2Restaurant += Number(this.sumOfGuests[2]);
              this.sumKi3Restaurant += Number(this.sumOfGuests[3]);
              this.sumKi4Restaurant += Number(this.sumOfGuests[4]);
            }
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

    this.tablesTerasseSortedByDate = this.tableTemp.sort(function(a, b) {
      let arrivalValueA = 0;
      let arrivalValueB = 0;
      if (typeof a.arrivalValue !== "undefined" && a.arrivalValue !== null) {
        arrivalValueA = a.arrivalValue; // ignore upper and lowercase
      }
      if (typeof b.arrivalValue !== "undefined" && b.arrivalValue !== null) {
        arrivalValueB = b.arrivalValue; // ignore upper and lowercase
      }
      if (arrivalValueA < arrivalValueB) {
        return -1;
      }
      if (arrivalValueA > arrivalValueB) {
        return 1;
      }
      // names must be equal
      return 0;
      //}
    });

    console.log(this.tablesTerasseSortedByDate);

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
