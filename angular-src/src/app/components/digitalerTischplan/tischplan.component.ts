import { Component, Directive, Input, ElementRef, ViewChild, Renderer } from '@angular/core';
import { TischplanService } from '../../services/tischplan.service';
import { DragulaService } from "ng2-dragula";
import { Http } from '@angular/http';
import { OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ImHausListe } from '../../../../ImHausListe';
import { AnreiseListe } from '../../../../AnreiseListe';
import { Table } from '../../../../Table';
import { LeftValue } from '../../../../LeftValue';
import {el} from "@angular/platform-browser/testing/src/browser_util";


@Component({
  selector: 'tischplan',
  templateUrl: 'tischplan.component.html',
  styleUrls: ['tischplan.component.css'],
})

export class TischplanComponent implements OnInit {
  buttonBgColor1: string;
  buttonBgColor2: string;
  buttonBgColor3: string;
  buttonBgColor4: string;
  fontColor1: string;
  fontColor2: string;
  fontColor3: string;
  fontColor4: string;
  leftValues: LeftValue[];
  topValues: any[] = [];

  imHausListeElemente: ImHausListe[];
  anreiseListeElemente: AnreiseListe[];
  tablesTemp: any[] = [];
  tempTablesArray: any[] = [];
  tempTablesArray2:  any[] = [];
  tempTablesArray1: any[] = [];
  tempTablesArray3: any[] = [];

  tracesListeElemente: any[] = [];
  tables: any[] = [];
  uniqueTables: any[] = [];
  tablesSonnbergZirbn: Table[] = [];
  tablesPanorama: Table[] = [];
  tablesRestaurant: Table[] = [];
  tablesWintergarten: Table[] = [];
  filesToUpload: Array<File> = [];
  isDropped: any[] = [];
  showSonnbergZirbnBool: boolean;
  showPanoramaBool: boolean;
  showRestaurantBool: boolean;
  showWintergartenBool: boolean;
  newInformationElements: any[] = [];
  dateGenerated: any;
  title: string;
  roomNumber: string;
  tableNumber: string;
  employee: string;
  nameTraceInput: string;
  backgroundColor: string;
  dateGeneratedListe: any;
  tablesOccupied: number;
  tableNumbers: any[] = [];


  constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, private dragulaService: DragulaService, private element: ElementRef, private renderer: Renderer) {
    let DomBaseElement = this.element.nativeElement;
    let wrapperElementsChildNames = [];

    this.tischplanService.getImHausListe()
      .subscribe(imHausListeElemente => {
        if(imHausListeElemente === null) {
          return;
        } else {
          this.imHausListeElemente = imHausListeElemente;
          console.log(this.imHausListeElemente);
        }
      });

    this.tischplanService.getAnreiseListe()
      .subscribe(anreiseListeElemente => {
        if(anreiseListeElemente === null) {
          return;
        } else {
          this.anreiseListeElemente = anreiseListeElemente;
          console.log(this.anreiseListeElemente);
        }
      });

    this.tischplanService.getInformationElements()
      .subscribe(informationElemente => {
        if(informationElemente === null) {
          return;
        } else {
          this.newInformationElements = informationElemente;
          console.log(this.newInformationElements);
        }
      });

    this.tischplanService.getTables()
      .subscribe(tables => {
        if(tables === null) {
          return;
        } else {
        console.log("TABLES LENGTH: " + tables.length);




          tables[2].tables.sort(function(a, b){
            if ( Number(a.number) < Number(b.number) )
              return -1;
            if ( Number(a.number) > Number(b.number)  )
              return 1;
            return 0;
          });

          let sorted = tables.sort();
          console.log('sorted:');
          console.log(sorted);

          for (let a = 0; a < tables.length; a++) {
          if (tables[a].department === "Panorama") {
            this.tablesPanorama = tables[a].tables;
          }
          else if (tables[a].department === "Wintergarten") {
            this.tablesWintergarten = tables[a].tables;
            console.log('Test' + JSON.stringify(this.tablesWintergarten));
          }
          else if (tables[a].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn = tables[a].tables;
          }
          else if (tables[a].department === "Restaurant") {
            this.tablesRestaurant = tables[a].tables;
          }
          }
        }

        console.log(this.tablesPanorama);
        console.log(this.tablesWintergarten);
        console.log(this.tablesSonnbergZirbn);
        console.log(this.tablesRestaurant);

        this.tables = this.tables.concat(this.tablesWintergarten).concat(this.tablesRestaurant).concat(this.tablesPanorama).concat(this.tablesSonnbergZirbn);



        this.formatAzListe(tables);

      });

    this.tischplanService.getTracesListe()
      .subscribe(tracesListeElemente  => {
        if(tracesListeElemente === null) {
          return;
        } else {
          console.log('92' + JSON.stringify(tracesListeElemente));
          //console.log("2:" + tracesListeElemente[0].data[0]);
          //console.log(tracesListeElemente[0].data.length);
          //this.tracesListeElemente = tracesListeElemente[0].data;
          this.tracesListeElemente = tracesListeElemente;
          //this.formatTracesListeElements(tracesListeElemente);
        }
      });

    this.dateGeneratedListe = new Date();
    this.buttonBgColor1 = "0a7a74";
    this.buttonBgColor2 = "0a7a74";
    this.buttonBgColor3 = "0a7a74";
    this.buttonBgColor4 = "0a7a74";
    this.fontColor1 = "f3efe4";
    this.fontColor2 = "f3efe4";
    this.fontColor3 = "f3efe4";
    this.fontColor4 = "f3efe4";
    this.tablesOccupied = 0;
    this.backgroundColor = "ffffff";




    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  public formatAzListe(tables) {

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



    /*
     for (let row=0; row<tempTablesArray.length; row++) {
     tempTablesArray[row] = [];
     for (let col=0; col < tempTablesArray[row].length; col++) {
     tempTablesArrayRow = tempTablesArray[row][col];
     }
     }




     <b> Name:</b> {{tableTeestubeTeelounge.nameValue2}}<br>
     <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue2}}<br>
     <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue2}}<br>
     <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue2}}<br>
     <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue2}}<br>
     <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz3Value}}<br>
     <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz4Value}}<br>
     <b> Trace:</b> {{tableTeestubeTeelounge.trace2}}<br>
     <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue3}}<br>
     </p>
     </div>
     <div *ngIf="tableTeestubeTeelounge.nameValue3">
     <p style="background-color: #FFFFFF; padding: 10px">
     <b> Name:</b> {{tableTeestubeTeelounge.nameValue3}}<br>
     <b> Sprache:</b> {{tableTeestubeTeelounge.katValue3}}<br>
     <b> Zimmernummer:</b> {{tableTeestubeTeelounge.zimmernummerValue3}}<br>
     <b> Anreise Datum:</b> {{tableTeestubeTeelounge.anreiseValue3}}<br>
     <b> Abreise Datum:</b> {{tableTeestubeTeelounge.abreiseValue3}}<br>
     <b> Personenanzahl:</b> {{tableTeestubeTeelounge.personenAnzahlValue3}}<br>
     <b> Notiz1:</b> {{tableTeestubeTeelounge.notiz5Value}}<br>
     <b> Notiz2:</b> {{tableTeestubeTeelounge.notiz6Value}}<br>
     <b> Trace:</b> {{tableTeestubeTeelounge.trace3}}<br>
     <b> BemerkungValue:</b> {{tableTeestubeTeelounge.bemerkungValue6}}<br>


     */
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

    /*
     this.tables.sort(function(a, b){
     if (a.nameValue < b.nameValue) return -1;
     if (a.nameValue > b.nameValue) return 1;
     return 0;
     });

     */


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
      // names must be equal
      return 0;
      //}
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

    console.log(this.tables);
  }


  /*
  public formatTracesListeElements(tracesListeElemente) {
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 7) {
        tracesListeElemente[0].data[o].splice(0, 5);
        tracesListeElemente[0].data[o].splice(6, 7);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 8) {
        tracesListeElemente[0].data.splice(o, 1);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 24) {
        tracesListeElemente[0].data[o].splice(0, 12);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 13) {
        tracesListeElemente[0].data.splice(o, 1);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 19) {
        tracesListeElemente[0].data[o].splice(0, 17);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 1) {
        tracesListeElemente[0].data.splice(o, 1);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 12) {
        tracesListeElemente[0].data[o].splice(8, 12);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o].length === 2) {
        tracesListeElemente[0].data[o].splice(1, 2);
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      console.log(o + tracesListeElemente[0].data[o]);
    }

    let trace = [];

    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      trace[o] = [];
    }

    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (tracesListeElemente[0].data[o] !== undefined) {
        if (tracesListeElemente[0].data[o].length === 8) {
          trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]);
          console.log('tracesListeElemente[0].data[o + 2] : ');
          console.log(tracesListeElemente[0].data[o + 2]);
          if (tracesListeElemente[0].data[o + 2] !== undefined) {
            if (tracesListeElemente[0].data[o + 2].length === 1) {
              trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]).concat(tracesListeElemente[0].data[o + 2]);
              if (tracesListeElemente[0].data[o + 3] !== undefined) {
                if (tracesListeElemente[0].data[o + 3].length === 1) {
                  trace[o] = tracesListeElemente[0].data[o].concat(tracesListeElemente[0].data[o + 1]).concat(tracesListeElemente[0].data[o + 2]).concat(tracesListeElemente[0].data[o + 3]);
                }
              }
            }
          }
        }
      }
    }
    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      let traceTemp = [];
      if (trace[o].length === 10) {
        traceTemp = trace[o].splice(trace[o].length - 2, trace[o].length);
      } else if (trace[o].length === 11) {
        traceTemp = trace[o].splice(trace[o].length - 3, trace[o].length);
      }
        console.log('traceTemp' + traceTemp);
        let traceTempJoined = traceTemp.join(" ");
        console.log('traceTempJoined' + traceTempJoined);
        trace[o].push(traceTempJoined);
      }


    for (let o = 0; o < tracesListeElemente[0].data.length; o++) {
      if (trace[o].length > 8) {
        this.tracesListeElemente.push(trace[o]);
      }
    }
    console.log('tracesListeElemente[0].data');
    console.log(tracesListeElemente[0].data);
    console.log('this.tracesListeElemente');
    console.log(this.tracesListeElemente);
  }

*/
  private onDrag(args) {
    let [e, el] = args;
  }

  private onDrop(args) {
    let [e, el] = args;
    console.log("Args = ");
    let information = args[0].innerText;

    console.log("information: " + information);
    let informationElements = information.split(/\n/);
    console.log(informationElements);
    let informationElements2 = [];
    for (let s = 0; s < informationElements.length; s++) {
      informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
      if (informationElements2[s] === undefined) {
        informationElements2[s] = informationElements[s]
      }
    }
    console.log(informationElements2);



    let department = JSON.stringify(args[1].id);
    console.log("departement" + department);
    let departementSubstring = department.substring(1, department.length - 1);
    console.log("departementSubstring" + departementSubstring);
    let tableNumber = args[1].innerText;
    let numbers = tableNumber.match(/\d+/g);
    console.log("numbers: " + numbers);
    let arrayIndex = numbers[1];
    console.log("arrayIndex: " + arrayIndex);
    let tableNumberSubstring = "";
    console.log("tableNumber" + tableNumber);
    tableNumberSubstring = tableNumber.toString().match(/\d+/);
    console.log("tableNumberSubstring" + tableNumberSubstring);
    let dataString = [];
    dataString.push(information + departementSubstring + tableNumberSubstring);
    //console.log(dataString);
    //console.log(departementSubstring);
    //console.log(tableNumberSubstring);

    this.tischplanService.addInformationToTable(dataString)
      .subscribe(response => {
        // let arrayIndex = response[1];
        console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
        if(response === null) {
          return;
        } else {
          if (response.tables[0].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Panorama") {
            this.tablesPanorama[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Restaurant") {
            this.tablesRestaurant[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Wintergarten") {
            this.tablesWintergarten[arrayIndex] = response.tables[0];
          }
        }
        // console.log(this.tablesSonnbergZirbn[arrayIndex]);
      });


    this.tischplanService.updateImHausListeElement(informationElements2)
      .subscribe(response => {
        //this.imHausListeElemente = response;
        console.log('updateImHausListeElement response: ');
        console.log(response);
      });

    this.tischplanService.updateAnreiseListeElement(informationElements2)
      .subscribe(response => {
        //this.imHausListeElemente = response;
        console.log('updateAnreiseListeElement response: ');
        console.log(response);
      });

    this.tischplanService.updateTracesListeElement(informationElements2)
      .subscribe(response => {
        //this.imHausListeElemente = response;
        console.log('updateTracesListeElement response: ');
        console.log(response);
      });


    console.log("Occupy Table!");
    this.tischplanService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
        console.log("Response occupyTable:" + JSON.stringify(response));
        if(response === null) {
          return;
        } else {

          if (response.tables[0].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Panorama") {
            this.tablesPanorama[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Restaurant") {
            this.tablesRestaurant[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Wintergarten") {
            this.tablesWintergarten[arrayIndex] = response.tables[0];
          }
        }

        //console.log("bgColor:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
      });
  }

  private onOver(args) {
    let [e, el, container] = args;

    console.log(e);
    console.log(el);
    console.log(container);

    this.backgroundColor = "0a7a74";

    console.log("Args = ");
    let information = args[0].innerText;
    let department = JSON.stringify(args[1].id);
    console.log("information" + information);
    console.log("departement" + department);
  }

  private onOut(args) {

    let [e, el, container] = args;

    /*
    console.log(e);
    console.log(el);
    console.log(container);

    this.backgroundColor = "0a7a74";

    console.log("Args = ");
    let information = args[0].innerText;
    let department = JSON.stringify(args[1].id);
    console.log("information" + information);
    console.log("departement" + department);
  */
  }

  ngOnInit() {
    // this.renderer.invokeElementMethod(this.input.nativeElement, 'focus');
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append('uploads[]', files[0], files[0]['name']);

    this.http.post('/upload', formData)
      .map(files => files.json()).map(res =>
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
      this._flashMessagesService.show('Erfolgreich CSV Datei hochgeladen', {cssClass: 'alert-success', timeout: 10000}))
      .subscribe(files => console.log('files', files));
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    //this.successMsg = "Hoi" + fileInput.target.files[0]['name'];
    //console.log(this.successMsg);
    //this.product.photo = fileInput.target.files[0]['name'];
  }

  occupy(table, j) {
    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log("Dispense Table:");
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
      if(response === null) {
        return;
      } else {

        response[0].tables.sort(function(a, b){
          if ( Number(a.number) < Number(b.number) )
            return -1;
          if ( Number(a.number) > Number(b.number)  )
            return 1;
          return 0;
        });


        if (response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "Panorama") {
          this.tablesPanorama[j] = response[0].tables[j];
        }
        else if (response[0].tables[j].department === "Restaurant") {
          this.tablesRestaurant = response[0].tables;
        }
        else if (response[0].tables[j].department === "Wintergarten") {
          this.tablesWintergarten = response[0].tables;
        }
      }
    });

    this.tischplanService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
      //console.log(this.tablesSonnbergZirbn[j].placeholder);
      if(response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Panorama") {
          this.tablesPanorama[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Restaurant") {
          this.tablesRestaurant[j].placeholder = response[0].tables[j].placeholder;
        }
        else if (response[0].tables[j].department === "Wintergarten") {
          this.tablesWintergarten[j].placeholder = response[0].tables[j].placeholder;
        }
      }
    });

  }

  showSonnbergZirbn() {

    console.log("showSonnbergZirbn!");
    this.showSonnbergZirbnBool = true;
    this.showPanoramaBool = false;
    this.showRestaurantBool = false;
    this.showWintergartenBool = false;

    if (this.buttonBgColor1 === "0a7a74") {
      this.buttonBgColor1 = "f3efe4";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74"
    } else {
      this.buttonBgColor1 = "0a7a74";
    }
    if (this.fontColor1 === "f3efe4") {
      this.fontColor1 = "0a7a74";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor4 = "f3efe4"
    } else {
      this.fontColor1 = "f3efe4";
    }
  }

  showPanorama() {
    console.log("showPanorama!");
    this.showSonnbergZirbnBool = false;
    this.showPanoramaBool = true;
    console.log(this.showPanoramaBool);
    this.showRestaurantBool = false;
    this.showWintergartenBool = false;

    if (this.buttonBgColor2 === "0a7a74") {
      this.buttonBgColor2 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor3 = "0a7a74";
      this.buttonBgColor4 = "0a7a74"
    } else {
      this.buttonBgColor2 = "0a7a74";
    }
    if (this.fontColor2 === "f3efe4") {
      this.fontColor2 = "0a7a74";
      this.fontColor1 = "f3efe4";
      this.fontColor3 = "f3efe4";
      this.fontColor4 = "f3efe4"
    } else {
      this.fontColor2 = "f3efe4";
    }
  }

  showRestaurant() {
    console.log("showRestaurant!");
    this.showSonnbergZirbnBool = false;
    this.showPanoramaBool = false;
    this.showRestaurantBool = true;
    this.showWintergartenBool = false;

    if (this.buttonBgColor3 === "0a7a74") {
      this.buttonBgColor3 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor4 = "0a7a74"
    } else {
      this.buttonBgColor3 = "0a7a74";
    }
    if (this.fontColor3 === "f3efe4") {
      this.fontColor3 = "0a7a74";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor4 = "f3efe4"
    } else {
      this.fontColor3 = "f3efe4";
    }
  }

  showWintergarten() {
    console.log("showWintergarten!");
    this.showSonnbergZirbnBool = false;
    this.showPanoramaBool = false;
    this.showRestaurantBool = false;
    this.showWintergartenBool = true;

    if (this.buttonBgColor4 === "0a7a74") {
      this.buttonBgColor4 = "f3efe4";
      this.buttonBgColor1 = "0a7a74";
      this.buttonBgColor2 = "0a7a74";
      this.buttonBgColor3 = "0a7a74"
    } else {
      this.buttonBgColor4 = "0a7a74";
    }
    if (this.fontColor4 === "f3efe4") {
      this.fontColor4 = "0a7a74";
      this.fontColor1 = "f3efe4";
      this.fontColor2 = "f3efe4";
      this.fontColor3 = "f3efe4"
    } else {
      this.fontColor4 = "f3efe4";
    }
  }

  moveTable(table, j) {

    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' +  j);
    this.tischplanService.moveTable(table).subscribe(response => {
      console.log('Response:' + JSON.stringify(response));

      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      if(response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn = response[0].tables;
        } else if (response[0].tables[j].department === "Panorama") {
          this.tablesPanorama = response[0].tables;
        } else if (response[0].tables[j].department === "Restaurant") {
          this.tablesRestaurant = response[0].tables;
        } else if (response[0].tables[j].department === "Wintergarten") {
          this.tablesWintergarten = response[0].tables;
        }
      }
    });
  }

  sendInformation(event) {
    event.preventDefault();
    this.dateGenerated = new Date();
    let newInformation = {
      text: this.title,
      roomNumber: this.roomNumber,
      tableNumber: this.tableNumber,
      date: this.dateGenerated,
      name: this.nameTraceInput,
      employee: this.employee
    };
    if (newInformation.text === undefined) {
      this._flashMessagesService.show('Die Nachricht ist leer ... ',
        { cssClass: 'alert-danger', timeout: 20000 });
      return;
    } else {
      this._flashMessagesService.show('Erfolgreich Information gespeichert ... ',
        { cssClass: 'alert-success', timeout: 20000 });
    }
    console.log(newInformation.tableNumber);

    if (newInformation.tableNumber) {
      this.tischplanService.sendInformation(newInformation)
        .subscribe(Information => {
          //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
          console.log('Information: ' + JSON.stringify(Information));
          console.log(Information.tables[0]);
          console.log("------");
          //console.log(Information[0].tables);

          if (Information === null) {
            return;
          } else {
            if (Information.tables[0].department === "Sonnberg-Zirbn") {
              for (let i = 0; i < this.tablesSonnbergZirbn.length; i++) {
                if (this.tablesSonnbergZirbn[i].number === Information.tables[0].number) {
                  this.tablesSonnbergZirbn[i] = Information.tables[0];
                }
              }
            } else if (Information.tables[0].department === "Panorama") {
              for (let i = 0; i < this.tablesPanorama.length; i++) {
                if (this.tablesPanorama[i].number === Information.tables[0].number) {
                  this.tablesPanorama[i] = Information.tables[0];
                }
              }
            } else if (Information.tables[0].department === "Restaurant") {
              for (let i = 0; i < this.tablesRestaurant.length; i++) {
                if (this.tablesRestaurant[i].number === Information.tables[0].number) {
                  this.tablesRestaurant[i] = Information.tables[0];
                }
              }
            } else if (Information.tables[0].department === "Wintergarten") {
              for (let i = 0; i < this.tablesWintergarten.length; i++) {
                if (this.tablesWintergarten[i].number === Information.tables[0].number) {
                  this.tablesWintergarten[i] = Information.tables[0];
                }
              }
            }
          }
        });
    }
    this.tischplanService.sendInformationToBox(newInformation)
      .subscribe(Information => {
        //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
        console.log('Information: ' + JSON.stringify(Information));
        //console.log(Information.tables[0]);
        //console.log("------");
        //console.log(Information[0].tables);
        this.newInformationElements.push(Information);
        console.log('this.newInformationElements' + this.newInformationElements);
      });
  }

  delete(informationElement, j, event) {
    console.log(informationElement);
    console.log(j);

      event.stopPropagation();

    this.tischplanService.deleteInformationElement(informationElement)
      .subscribe(informationElement => {
        this.newInformationElements.splice (j, 1);
      });
  }


  none(event) {
    event.stopPropagation();
  }

  printToCart1(printSectionId1: string) {
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId1).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">\n' +
      '<script src="node_modules/core-js/client/shim.min.js"></script>\n' +
      '<script src="<your-libs-directory>/object-assign.min.js"></script></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart2(printSectionId2: string){
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId2).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
  printToCart3(printSectionId3: string){
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId3).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

}
