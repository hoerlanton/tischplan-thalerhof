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
    tracesListeElemente: any[] = [];
    tables: Table[];
    tablesSonnbergZirbn: Table[] = [];
    tablesPanorama: Table[] = [];
    tablesRestaurant: Table[] = [];
    tablesWintergarten: Table[] = [];
    title: string;
    filesToUpload: Array<File> = [];

    isDropped: any[] = [];
    showSonnbergZirbnBool: boolean;
    showPanoramaBool: boolean;
    showRestaurantBool: boolean;
    showWintergartenBool: boolean;

    constructor(private tischplanService: TischplanService, private http: Http, private _flashMessagesService: FlashMessagesService, private dragulaService: DragulaService, private element: ElementRef, private renderer: Renderer) {
        let DomBaseElement = this.element.nativeElement;
        let wrapperElementsChildNames = [];

        this.tischplanService.getImHausListe()
            .subscribe(imHausListeElemente => {
                this.imHausListeElemente = imHausListeElemente[0].data;
                console.log(this.imHausListeElemente);
            });

        this.tischplanService.getAnreiseListe()
            .subscribe(anreiseListeElemente => {
                this.anreiseListeElemente = anreiseListeElemente[0].data;
              console.log(this.anreiseListeElemente);
            });

        this.tischplanService.getTables()
          .subscribe(tables => {
            console.log("TABLES LENGTH: " + tables.length);

            for (let a = 0; a < tables.length; a++) {
              if (tables[a].department === "Panorama") {
                this.tablesPanorama = tables[a].tables;
              }
              else if (tables[a].department === "Wintergarten") {
                this.tablesWintergarten = tables[a].tables;
              }
              else if (tables[a].department === "Sonnberg-Zirbn") {
                this.tablesSonnbergZirbn = tables[a].tables;
              }
              else if (tables[a].department === "Restaurant") {
                this.tablesRestaurant = tables[a].tables;
              }
            }


            console.log(this.tablesPanorama);
            console.log(this.tablesWintergarten);
            console.log(this.tablesSonnbergZirbn);
            console.log(this.tablesRestaurant);

        });

        this.tischplanService.getTracesListe()
            .subscribe(tracesListeElemente  => {
                    //console.log(tracesListeElemente);
                    //console.log("2:" + tracesListeElemente[0].data[0]);
                    //console.log(tracesListeElemente[0].data.length);
                    //this.tracesListeElemente = tracesListeElemente[0].data;
                    this.formatTracesListeElements(tracesListeElemente);
            });

        this.buttonBgColor1 = "eaf3f3";
        this.buttonBgColor2 = "eaf3f3";
        this.buttonBgColor3 = "eaf3f3";
        this.buttonBgColor4 = "eaf3f3";
        this.fontColor1 = "0a7a74";
        this.fontColor2 = "0a7a74";
        this.fontColor3 = "0a7a74";
        this.fontColor4 = "0a7a74";

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
      let trace1 = [];
      let trace2 = [];
      let trace3 = [];
      let trace4 = [];
      let trace5 = [];
      let trace6 = [];
      let trace7 = [];
      let trace8 = [];
      let trace9 = [];
      let trace10 = [];
      if (tracesListeElemente[0].data[0] !== undefined) {
        if (tracesListeElemente[0].data[0].length === 8) {
          trace1 = tracesListeElemente[0].data[0].concat(tracesListeElemente[0].data[1]);
        }
      }
      if (tracesListeElemente[0].data[1] !== undefined) {
        if (tracesListeElemente[0].data[1].length === 8) {
          trace2 = tracesListeElemente[0].data[1].concat(tracesListeElemente[0].data[2]);
        }
      }
      if (tracesListeElemente[0].data[2] !== undefined) {
        if (tracesListeElemente[0].data[2].length === 8) {
          trace3 = tracesListeElemente[0].data[2].concat(tracesListeElemente[0].data[3]);
        }
      }
      if (tracesListeElemente[0].data[3] !== undefined) {
        if (tracesListeElemente[0].data[3].length === 8) {
          trace4 = tracesListeElemente[0].data[3].concat(tracesListeElemente[0].data[4]);
        }
      }
      if (tracesListeElemente[0].data[4] !== undefined) {
        if (tracesListeElemente[0].data[4].length === 8) {
          trace5 = tracesListeElemente[0].data[4].concat(tracesListeElemente[0].data[5]);
        }
      }
      if (tracesListeElemente[0].data[5] !== undefined) {
        if (tracesListeElemente[0].data[5].length === 8) {
          trace6 = tracesListeElemente[0].data[5].concat(tracesListeElemente[0].data[6]);
        }
      }
      if (tracesListeElemente[0].data[6] !== undefined) {
        if (tracesListeElemente[0].data[6].length === 8) {
          trace7 = tracesListeElemente[0].data[6].concat(tracesListeElemente[0].data[7]);
        }
      }
      if (tracesListeElemente[0].data[7] !== undefined) {
        if (tracesListeElemente[0].data[7].length === 8) {
          trace8 = tracesListeElemente[0].data[7].concat(tracesListeElemente[0].data[8]);
        }
      }
      if (tracesListeElemente[0].data[8] !== undefined) {
        if (tracesListeElemente[0].data[8].length === 8) {
          trace9 = tracesListeElemente[0].data[8].concat(tracesListeElemente[0].data[9]);
        }
      }
      if (tracesListeElemente[0].data[9] !== undefined) {
        if (tracesListeElemente[0].data[9].length === 8) {
          trace10 = tracesListeElemente[0].data[9].concat(tracesListeElemente[0].data[10]);
        }
      }

      console.log(trace1);
      if(trace1.length === 9){
        this.tracesListeElemente.push(trace1)
      }
      if(trace2.length === 9){
        this.tracesListeElemente.push(trace2)
      }
      if(trace3.length === 9){
        this.tracesListeElemente.push(trace3)
      }
      if(trace4.length === 9){
        this.tracesListeElemente.push(trace4)
      }
      if(trace5.length === 9){
        this.tracesListeElemente.push(trace5)
      }
      if(trace6.length === 9){
        this.tracesListeElemente.push(trace6)
      }
      if(trace7.length === 9){
        this.tracesListeElemente.push(trace7)
      }
      if(trace8.length === 9){
        this.tracesListeElemente.push(trace8)
      }
      if(trace9.length === 9){
        this.tracesListeElemente.push(trace9)
      }
      if(trace10.length === 9){
        this.tracesListeElemente.push(trace10)
      }

      console.log(tracesListeElemente[0].data);
      console.log(this.tracesListeElemente);
    }

    private onDrag(args) {
        let [e, el] = args;
    }

    private onDrop(args) {
      let [e, el] = args;
      console.log("Args = ");
      let information = args[0].innerText;
      let department = JSON.stringify(args[1].id);
      let departementSubstring = department.substring(10, department.length - 1);
      console.log(departementSubstring);
      let tableNumber = args[1].innerText;
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
          if(response.tables[0].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if(response.tables[0].department === "Panorama") {
            this.tablesPanorama[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if(response.tables[0].department === "Restaurant") {
            this.tablesRestaurant[response.tables[0].arrayIndex] = response.tables[0];
          }
          else if(response.tables[0].department === "Wintergarten") {
            this.tablesWintergarten[response.tables[0].arrayIndex] = response.tables[0];
          }
          // console.log(this.tablesSonnbergZirbn[arrayIndex]);
      });

        console.log("Occupy Table!");
        this.tischplanService.occupyTable(dataString)
          .subscribe(response => {
            //let arrayIndex = response[1];
            //console.log("arrayIndex:" + arrayIndex);
            //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));
            console.log("Response occupyTable:" + JSON.stringify(response));

            if(response.tables[0].department === "Sonnberg-Zirbn") {
              this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if(response.tables[0].department === "Panorama") {
              this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if(response.tables[0].department === "Restaurant") {
              this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }
            else if(response.tables[0].department === "Wintergarten") {
              this.tablesSonnbergZirbn[response.tables[0].arrayIndex] = response.tables[0];
            }


            //console.log("bgColor:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
        });

      this.tischplanService.removePlaceholder(dataString)
        .subscribe(response => {
          //let arrayIndex = response[1];
          console.log("Response placeholder:" + JSON.stringify(response));
          if(response.tables[0].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
          }
          else if(response.tables[0].department === "Panorama") {
            this.tablesPanorama[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
          }
          else if(response.tables[0].department === "Restaurant") {
            this.tablesRestaurant[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
          }
          else if(response.tables[0].department === "Wintergarten") {
            this.tablesWintergarten[response.tables[0].arrayIndex].placeholder = response.tables[0].placeholder;
          }



          //console.log("placeholder:" + JSON.stringify(this.tablesSonnbergZirbn[arrayIndex]));
      });
    }

    private onOver(args) {
        let [e, el, container] = args;
        // do something
    }

    private onOut(args) {
        let [e, el, container] = args;
        // do something
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

        if(response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn[j].bgColor = response[0].tables[j].bgColor;
          this.tablesSonnbergZirbn[j].isBesetzt = response[0].tables[j].isBesetzt;
        }
        else if(response[0].tables[j].department === "Panorama") {
          this.tablesPanorama[j].bgColor = response[0].tables[j].bgColor;
          this.tablesPanorama[j].isBesetzt = response[0].tables[j].isBesetzt;
        }
        else if(response[0].tables[j].department === "Restaurant") {
          this.tablesRestaurant[j].bgColor = response[0].tables[j].bgColor;
          this.tablesRestaurant[j].isBesetzt = response[0].tables[j].isBesetzt;
        }
        else if(response[0].tables[j].department === "Wintergarten") {
          this.tablesWintergarten[j].bgColor = response[0].tables[j].bgColor;
          this.tablesWintergarten[j].isBesetzt = response[0].tables[j].isBesetzt;
        }
      });

      this.tischplanService.addPlaceholder(table).subscribe(response => {
        console.log("Add placeholder!");
        console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
        //console.log(this.tablesSonnbergZirbn[j].placeholder);
        if(response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn[j].placeholder = response[0].tables[j].placeholder;
        }
        else if(response[0].tables[j].department === "Panorama") {
          this.tablesPanorama[j].placeholder = response[0].tables[j].placeholder;
        }
        else if(response[0].tables[j].department === "Restaurant") {
          this.tablesRestaurant[j].placeholder = response[0].tables[j].placeholder;
        }
        else if(response[0].tables[j].department === "Wintergarten") {
          this.tablesWintergarten[j].placeholder = response[0].tables[j].placeholder;
        }
      });

  }

    showSonnbergZirbn() {

        console.log("showSonnbergZirbn!");
        this.showSonnbergZirbnBool = true;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;

        if (this.buttonBgColor1 === "eaf3f3") {
            this.buttonBgColor1 = "0a7a74";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3"
        } else {
            this.buttonBgColor1 = "eaf3f3";
        }
        if (this.fontColor1 === "0a7a74") {
            this.fontColor1 = "eaf3f3";
            this.fontColor2 = "0a7a74";
            this.fontColor3 = "0a7a74";
            this.fontColor4 = "0a7a74"
        } else {
            this.fontColor1 = "0a7a74";
        }
    }

    showPanorama() {
        console.log("showPanorama!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = true;
        console.log(this.showPanoramaBool);
        this.showRestaurantBool = false;
        this.showWintergartenBool = false;

        if (this.buttonBgColor2 === "eaf3f3") {
            this.buttonBgColor2 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor3 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3"
        } else {
            this.buttonBgColor2 = "eaf3f3";
        }
        if (this.fontColor2 === "0a7a74") {
            this.fontColor2 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor3 = "0a7a74";
            this.fontColor4 = "0a7a74"
        } else {
            this.fontColor2 = "0a7a74";
        }
    }

    showRestaurant() {
        console.log("showRestaurant!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = true;
        this.showWintergartenBool = false;


        if (this.buttonBgColor3 === "eaf3f3") {
            this.buttonBgColor3 = "0a7a74";
            this.buttonBgColor1 = "eaf3f3";
            this.buttonBgColor2 = "eaf3f3";
            this.buttonBgColor4 = "eaf3f3"
        } else {
            this.buttonBgColor3 = "eaf3f3";
        }
        if (this.fontColor3 === "0a7a74") {
            this.fontColor3 = "eaf3f3";
            this.fontColor1 = "0a7a74";
            this.fontColor2 = "0a7a74";
            this.fontColor4 = "0a7a74"
        } else {
            this.fontColor3 = "0a7a74";
        }
    }

    showWintergarten() {
        console.log("showWintergarten!");
        this.showSonnbergZirbnBool = false;
        this.showPanoramaBool = false;
        this.showRestaurantBool = false;
        this.showWintergartenBool = true;

        if (this.buttonBgColor4 === "eaf3f3") {
              this.buttonBgColor4 = "0a7a74";
              this.buttonBgColor1 = "eaf3f3";
              this.buttonBgColor2 = "eaf3f3";
              this.buttonBgColor3 = "eaf3f3"
          } else {
              this.buttonBgColor4 = "eaf3f3";
          }
          if (this.fontColor4 === "0a7a74") {
              this.fontColor4 = "eaf3f3";
              this.fontColor1 = "0a7a74";
              this.fontColor2 = "0a7a74";
              this.fontColor3 = "0a7a74"
          } else {
              this.fontColor4 = "0a7a74";
          }
    }

/*
    moveTable(g, j, f) {

      console.log("moveTable clicked");
      console.log(g, j, f + "-" +  this.leftValues[f] + "-" + this.topValues[g]);

      //Sonnberg-Zirbn
      //50
      if (g === 10 && this.topValues[g] === 430) {
          this.topValues[g] = 400;
          this.tables.splice(j + 1, 1, 50);
      }   else if (g === 10 && this.topValues[g] === 400) {
          this.topValues[g] = 430;
          this.tables.splice(j + 1, 1, 51);
      }
      //52
      if (g === 12 && this.leftValues[f] === 230 && this.topValues[g] === 280) {
        this.topValues[g] = 280;
        this.leftValues[f] = 200;
        this.tables.splice(j + 1, 1, 52);
      } else if (g === 12 && this.leftValues[f] === 200 && this.topValues[g] === 280) {
        this.leftValues[f] = 230;
        this.topValues[g] = 280;
        this.tables.splice(j + 1, 1, 53);
      }
      //54
      if (g === 14 && this.leftValues[f] === 50 && this.topValues[g] === 320) {
        this.topValues[g] = 290;
        this.leftValues[f] = 50;
        this.tables.splice(j + 1, 1, 54);
      } else if (g === 14 && this.leftValues[f] === 50 && this.topValues[g] === 290) {
        this.topValues[g] = 320;
        this.leftValues[f] = 50;
        this.tables.splice(j + 1, 1, 55);
      }
      //56
      if (g === 16 && this.leftValues[f] === 50 && this.topValues[g] === 200) {
        this.topValues[g] = 170;
        this.leftValues[f] = 50;
        this.tables.splice(j + 1, 1, 56);
      } else if (g === 16 && this.leftValues[f] === 50 && this.topValues[g] === 170) {
        this.topValues[g] = 200;
        this.leftValues[f] = 50;
        this.tables.splice(j + 1, 1, 57);
      }

      //Panorama Restaurant
      //60
      if (g === 0 && this.leftValues[f] === 220 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 250;
        this.tables.splice(j + 1, 1, 60);
      } else if (g === 0 && this.leftValues[f] === 250 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 220;
        this.tables.splice(j + 1, 1, 61);
      }
      //61
      if (g === 1 && this.leftValues[f] === 280 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 310;
        this.tables.splice(j + 1, 1, 61);
      } else if (g === 1 && this.leftValues[f] === 310 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 280;
        this.tables.splice(j + 1, 1, 62);
      }
      //62
      if (g === 2 && this.leftValues[f] === 340 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 370;
        this.tables.splice(j + 1, 1, 62);
      } else if (g === 2 && this.leftValues[f] === 370 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 340;
        this.tables.splice(j + 1, 1, 63);
      }
      //63
      if (g === 3 && this.leftValues[f] === 400 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 430;
        this.tables.splice(j + 1, 1, 63);
      } else if (g === 3 && this.leftValues[f] === 430 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 400;
        this.tables.splice(j + 1, 1, 64);
      }
      //64
      if (g === 4 && this.leftValues[f] === 460 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 490;
        this.tables.splice(j + 1, 1, 64);
      } else if (g === 4 && this.leftValues[f] === 490 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 460;
        this.tables.splice(j + 1, 1, 65);
      }
      //65
      if (g === 5 && this.leftValues[f] === 520 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 550;
        this.tables.splice(j + 1, 1, 65);
      } else if (g === 5 && this.leftValues[f] === 550 && this.topValues[g] === 440) {
        this.topValues[g] = 440;
        this.leftValues[f] = 520;
        this.tables.splice(j + 1, 1, 66);
      }
      //67
      if (g === 7 && this.leftValues[f] === 580 && this.topValues[g] === 340) {
        this.topValues[g] = 310;
        this.leftValues[f] = 580;
        this.tables.splice(j + 1, 1, 67);
      } else if (g === 7 && this.leftValues[f] === 580 && this.topValues[g] === 310) {
        this.topValues[g] = 340;
        this.leftValues[f] = 580;
        this.tables.splice(j + 1, 1, 68);
      }
      //68
      if (g === 8 && this.leftValues[f] === 580 && this.topValues[g] === 280) {
        this.topValues[g] = 250;
        this.leftValues[f] = 580;
        this.tables.splice(j + 1, 1, 68);
      } else if (g === 8 && this.leftValues[f] === 580 && this.topValues[g] === 250) {
        this.topValues[g] = 280;
        this.leftValues[f] = 580;
        this.tables.splice(j + 1, 1, 69);
      }
      //69
      if (g === 9 && this.leftValues[f] === 580 && this.topValues[g] === 220) {
        this.topValues[g] = 190;
        this.leftValues[f] = 580;
        this.tables.splice(j + 1, 1, 69);
      } else if (g === 9 && this.leftValues[f] === 580 && this.topValues[g] === 190) {
        this.topValues[g] = 220;
        this.leftValues[f] = 580;
        this.tables.splice(j + 1, 1, 70);
      }
      //71
      if (g === 11 && this.leftValues[f] === 460 && this.topValues[g] === 160) {
        this.topValues[g] = 190;
        this.leftValues[f] = 460;
        this.tables.splice(j + 1, 1, 71);
      } else if (g === 11 && this.leftValues[f] === 460 && this.topValues[g] === 190) {
        this.topValues[g] = 160;
        this.leftValues[f] = 460;
        this.tables.splice(j + 1, 1, 72);
      }
      //72
      if (g === 12 && this.leftValues[f] === 460 && this.topValues[g] === 220) {
        this.topValues[g] = 250;
        this.leftValues[f] = 460;
        this.tables.splice(j + 1, 1, 72);
      } else if (g === 12 && this.leftValues[f] === 460 && this.topValues[g] === 250) {
        this.topValues[g] = 220;
        this.leftValues[f] = 460;
        this.tables.splice(j + 1, 1, 73);
      }
      //73
      if (g === 13 && this.leftValues[f] === 460 && this.topValues[g] === 280) {
        this.topValues[g] = 310;
        this.leftValues[f] = 460;
        this.tables.splice(j + 1, 1, 73);
      } else if (g === 13 && this.leftValues[f] === 460 && this.topValues[g] === 310) {
        this.topValues[g] = 280;
        this.leftValues[f] = 460;
        this.tables.splice(j + 1, 1, 74);
      }
      //75
      if (g === 15 && this.leftValues[f] === 340 && this.topValues[g] === 340) {
        this.topValues[g] = 310;
        this.leftValues[f] = 340;
        this.tables.splice(j + 1, 1, 75);
      } else if (g === 15 && this.leftValues[f] === 340 && this.topValues[g] === 310) {
        this.topValues[g] = 340;
        this.leftValues[f] = 340;
        this.tables.splice(j + 1, 1, 76);
      }
      //76
      if (g === 16 && this.leftValues[f] === 340 && this.topValues[g] === 280) {
        this.topValues[g] = 250;
        this.leftValues[f] = 340;
        this.tables.splice(j + 1, 1, 76);
      } else if (g === 16 && this.leftValues[f] === 340 && this.topValues[g] === 250) {
        this.topValues[g] = 280;
        this.leftValues[f] = 340;
        this.tables.splice(j + 1, 1, 77);
      }
      //77
      if (g === 17 && this.leftValues[f] === 340 && this.topValues[g] === 220) {
        this.topValues[g] = 190;
        this.leftValues[f] = 340;
        this.tables.splice(j + 1, 1, 77);
      } else if (g === 17 && this.leftValues[f] === 340 && this.topValues[g] === 190) {
        this.topValues[g] = 220;
        this.leftValues[f] = 340;
        this.tables.splice(j + 1, 1, 78);
      }
      //79
      if (g === 19 && this.leftValues[f] === 220 && this.topValues[g] === 340) {
        this.topValues[g] = 310;
        this.leftValues[f] = 220;
        this.tables.splice(j + 1, 1, 79);
      } else if (g === 19 && this.leftValues[f] === 220 && this.topValues[g] === 310) {
        this.topValues[g] = 340;
        this.leftValues[f] = 220;
        this.tables.splice(j + 1, 1, 80);
      }
      //80
      if (g === 20 && this.leftValues[f] === 220 && this.topValues[g] === 280) {
        this.topValues[g] = 250;
        this.leftValues[f] = 220;
        this.tables.splice(j + 1, 1, 80);
      } else if (g === 20 && this.leftValues[f] === 220 && this.topValues[g] === 250) {
        this.topValues[g] = 280;
        this.leftValues[f] = 220;
        this.tables.splice(j + 1, 1, 81);
      }
      //81
      if (g === 21 && this.leftValues[f] === 220 && this.topValues[g] === 220) {
        this.topValues[g] = 190;
        this.leftValues[f] = 220;
        this.tables.splice(j + 1, 1, 81);
      } else if (g === 21 && this.leftValues[f] === 220 && this.topValues[g] === 190) {
        this.topValues[g] = 220;
        this.leftValues[f] = 220;
        this.tables.splice(j + 1, 1, 82);
      }
      //83
      if (g === 23 && this.leftValues[f] === 60 && this.topValues[g] === 160) {
        this.topValues[g] = 190;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 83);
      } else if (g === 23 && this.leftValues[f] === 60 && this.topValues[g] === 190) {
        this.topValues[g] = 160;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 84);
      }
      //84
      if (g === 24 && this.leftValues[f] === 60 && this.topValues[g] === 220) {
        this.topValues[g] = 250;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 84);
      } else if (g === 24 && this.leftValues[f] === 60 && this.topValues[g] === 250) {
        this.topValues[g] = 220;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 85);
      }
      //85
      if (g === 25 && this.leftValues[f] === 60 && this.topValues[g] === 280) {
        this.topValues[g] = 310;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 85);
      } else if (g === 25 && this.leftValues[f] === 60 && this.topValues[g] === 310) {
        this.topValues[g] = 280;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 86);
      }
      //86
      if (g === 26 && this.leftValues[f] === 60 && this.topValues[g] === 340) {
        this.topValues[g] = 370;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 86);
      } else if (g === 26 && this.leftValues[f] === 60 && this.topValues[g] === 370) {
        this.topValues[g] = 340;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 87);
      }
      //87
      if (g === 27 && this.leftValues[f] === 60 && this.topValues[g] === 400) {
        this.topValues[g] = 430;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 87);
      } else if (g === 27 && this.leftValues[f] === 60 && this.topValues[g] === 430) {
        this.topValues[g] = 400;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 88);
      }
      //88
      if (g === 28 && this.leftValues[f] === 60 && this.topValues[g] === 460) {
        this.topValues[g] = 490;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 88);
      } else if (g === 28 && this.leftValues[f] === 60 && this.topValues[g] === 490) {
        this.topValues[g] = 460;
        this.leftValues[f] = 60;
        this.tables.splice(j + 1, 1, 89);
      }
      //9
      if (g === 8 && this.leftValues[f] === 180 && this.topValues[g] === 200) {
        this.topValues[g] = 200;
        this.leftValues[f] = 210;
        this.tables.splice(j + 1, 1, 9);
      } else if (g === 8 && this.leftValues[f] === 210 && this.topValues[g] === 200) {
        this.topValues[g] = 200;
        this.leftValues[f] = 180;
        this.tables.splice(j + 1, 1, 10);
      }
      //501
      if (g === 0 && this.leftValues[f] === 420 && this.topValues[g] === 115) {
        this.topValues[g] = 115;
        this.leftValues[f] = 470;
        this.tables.splice(j + 1, 1, 501);
      } else if (g === 0 && this.leftValues[f] === 470 && this.topValues[g] === 115) {
        this.topValues[g] = 115;
        this.leftValues[f] = 420;
        this.tables.splice(j + 1, 1, 502);
      }
      //503
      if (g === 2 && this.leftValues[f] === 590 && this.topValues[g] === 115) {
        this.topValues[g] = 115;
        this.leftValues[f] = 640;
        this.tables.splice(j + 1, 1, 503);
      } else if (g === 2 && this.leftValues[f] === 640 && this.topValues[g] === 115) {
        this.topValues[g] = 115;
        this.leftValues[f] = 590;
        this.tables.splice(j + 1, 1, 504);
      }
      //505
      if (g === 4 && this.leftValues[f] === 590 && this.topValues[g] === 215) {
        this.topValues[g] = 215;
        this.leftValues[f] = 640;
        this.tables.splice(j + 1, 1, 505);
      } else if (g === 4 && this.leftValues[f] === 640 && this.topValues[g] === 215) {
        this.topValues[g] = 215;
        this.leftValues[f] = 590;
        this.tables.splice(j + 1, 1, 506);
      }
      //515
      if (g === 14 && this.leftValues[f] === 280 && this.topValues[g] === 380) {
        this.topValues[g] = 380;
        this.leftValues[f] = 240;
        this.tables.splice(j + 1, 1, 515);
      } else if (g === 14 && this.leftValues[f] === 240 && this.topValues[g] === 380) {
        this.topValues[g] = 380;
        this.leftValues[f] = 280;
        this.tables.splice(j + 1, 1, 516);
      }
      //523
      if (g === 23 && this.leftValues[f] === 300 && this.topValues[g] === 115) {
        this.topValues[g] = 130;
        this.leftValues[f] = 260;
        this.tables.splice(j, 1, 523);
      } else if (g === 23 && this.leftValues[f] === 260 && this.topValues[g] === 130) {
        this.topValues[g] = 115;
        this.leftValues[f] = 300;
        this.tables.splice(j, 1, 524);
      }
    }
*/
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
    popupWinindow = window.open('', '_blank', 'width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }
}
