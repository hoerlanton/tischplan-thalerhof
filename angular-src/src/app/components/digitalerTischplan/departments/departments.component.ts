import { Component, OnInit, Input, ViewChild, Output, EventEmitter, Injectable, AfterViewInit, AfterViewChecked, ChangeDetectorRef  } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { Table } from '../../../../../Table';
import { WintergartenComponent } from './wintergarten/wintergarten.component';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { NavService }   from '../../../services/tables.service';
import { TischplanComponent } from '../tischplan.component';
import { DragulaService } from "ng2-dragula";
import { Http, Headers } from '@angular/http';



@Component({
  selector: 'app-departments',
  templateUrl: 'departments.component.html',
  styleUrls: ['../tischplan.component.css']
})

export class DepartmentsComponent {

  @Input('tablesWintergarten') tablesWintergarten: Table[];
  @Input('showWintergartenBool') showWintergartenBool: boolean;
  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: Table[];
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: boolean;
  @Input() tablesPanorama: Table[];
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Input('tablesRestaurant') tablesRestaurant: Table[];
  @Input('showRestaurantBool') showRestaurantBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Input() tablesTempAbreise: any;
  @Input('term') term: string;
  @Output()
  dispensedSonnbergZirbn:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedWintergarten:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedPanorama:EventEmitter<any> = new EventEmitter();
  @Output()
  updateAzList:EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  parts: any[] = [];
  date: any[] = [];
  parsedDate: any[] = [];
  a: any;
  b: any;
  tables: any;

  constructor( private tischplanService: TischplanService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  occupied(table) {
    console.log("table.j");
    console.log(table.j);
    console.log("table.table");
    console.log(table.table);
    this.occupy(table.table, table.j);
  }

  occupy(table, j) {
    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log("Dispense Table:");
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].department));
      if (response === null) {
        return;
      } else {
        response[0].tables.sort(function (a, b) {
          if (Number(a.number) < Number(b.number))
            return -1;
          if (Number(a.number) > Number(b.number))
            return 1;
          return 0;
        });
            if (response[0].tables[j].department === "Sonnberg-Zirbn") {
              this.dispensedSonnbergZirbn.emit(response[0].tables);
            } else if (response[0].tables[j].department === "Panorama") {
              this.dispensedPanorama.emit(response[0].tables);
            } else if (response[0].tables[j].department === "Restaurant") {
              this.dispensedRestaurant.emit(response[0].tables);
            } else if (response[0].tables[j].department === "Wintergarten") {
              this.dispensedWintergarten.emit(response[0].tables);
              console.log("Wintergarten" + JSON.stringify(response[0].tables));
            }
        }
      this.updateAzList.emit();
    });

    this.tischplanService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      console.log("placeholder:" + JSON.stringify(response[0].tables[j].placeholder));
      //console.log(this.tablesSonnbergZirbn[j].placeholder);
      if (response === null) {
        return;
      } else {
        {
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
      }
    });
  }

  addInformationToTable(dataString, arrayIndex) {
    console.log("dataString");
    console.log(dataString);
    this.tischplanService.addInformationToTable(dataString)
      .subscribe(response => {
          // let arrayIndex = response[1];
          console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
          if (response === null) {
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
        }
        // console.log(this.tablesSonnbergZirbn[arrayIndex]);
      )
  };

  occupyTableOnDrop(dataString, arrayIndex) {
    console.log("Occupy Table!");
    console.log(dataString);
    this.tischplanService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));

        console.log("Response occupyTable:" + JSON.stringify(response));
        if (response === null) {
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
        this.updateAzList.emit();
      });
  }

  changeBgColorIfAnreise() {
    setTimeout(() => {
      this.tables = this.tablesTempAbreise;

      console.log('================changeBgColorIfAnreise');
      this.dateTodayGenerated = new Date();

      for (let a = 0; a < this.tables.length; a++) {
        for (let b = 0; b < this.tables[a].tables.length; b++) {

          if (this.tables[a].tables[b].anreiseValue) {
            console.log('tables[a].tables[b].anreiseValue: ' + b + " " + this.tables[a].tables[b].anreiseValue);
            this.parts[0] = this.tables[a].tables[b].anreiseValue.match(/(\d+)/g);
          } else {
            this.parts[0] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue2) {
            this.parts[1] = this.tables[a].tables[b].anreiseValue2.match(/(\d+)/g);
          } else {
            this.parts[1] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue3) {
            this.parts[2] = this.tables[a].tables[b].anreiseValue3.match(/(\d+)/g);
          } else {
            this.parts[2] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue4) {
            this.parts[3] = this.tables[a].tables[b].anreiseValue4.match(/(\d+)/g);
          } else {
            this.parts[3] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue5) {
            this.parts[4] = this.tables[a].tables[b].anreiseValue5.match(/(\d+)/g);
          } else {
            this.parts[4] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue6) {
            this.parts[5] = this.tables[a].tables[b].anreiseValue6.match(/(\d+)/g);
          } else {
            this.parts[5] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue7) {
            this.parts[6] = this.tables[a].tables[b].anreiseValue7.match(/(\d+)/g);
          } else {
            this.parts[6] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue8) {
            this.parts[7] = this.tables[a].tables[b].anreiseValue8.match(/(\d+)/g);
          } else {
            this.parts[7] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue9) {
            this.parts[8] = this.tables[a].tables[b].anreiseValue9.match(/(\d+)/g);
          } else {
            this.parts[8] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue10) {
            this.parts[9] = this.tables[a].tables[b].anreiseValue10.match(/(\d+)/g);
          } else {
            this.parts[9] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue11) {
            this.parts[10] = this.tables[a].tables[b].anreiseValue11.match(/(\d+)/g);
          } else {
            this.parts[10] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue12) {
            this.parts[11] = this.tables[a].tables[b].anreiseValue12.match(/(\d+)/g);
          } else {
            this.parts[11] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue13) {
            this.parts[12] = this.tables[a].tables[b].anreiseValue13.match(/(\d+)/g);
          } else {
            this.parts[12] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue14) {
            this.parts[13] = this.tables[a].tables[b].anreiseValue14.match(/(\d+)/g);
          } else {
            this.parts[13] = "undefined";
          }
          if (this.tables[a].tables[b].anreiseValue15) {
            this.parts[14] = this.tables[a].tables[b].anreiseValue15.match(/(\d+)/g);
          } else {
            this.parts[14] = "undefined";
          }

          for (let c = 0; c <= 14; c++) {
            if (this.parts[c]) {
              this.date[c] = new Date(2018, this.parts[c][1] - 1, this.parts[c][0]);
              this.parsedDate[c] = String(this.date[c]).substring(0, 15);
            }
          }
          // note parts[1]-1
          //console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
          // Mon May 31 2010 00:00:00
          //this.tablesRestaurant[j].anreiseValue
          let dateToday = String(this.dateTodayGenerated).substring(0, 15);
          this.cdr.detectChanges();
          console.log('Parsed Date --->: ' + this.parsedDate[0]);
          console.log('this.dateGenerated --->: ' + dateToday);
          if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
            if (this.tables[a].department === "Panorama") {
              console.log(this.tablesPanorama);
              console.log(this.tablesPanorama[b]);
              this.tablesPanorama[b].bgColor = "#0a7a74";
            }
            else if (this.tables[a].department === "Wintergarten") {
              this.tablesWintergarten[b].bgColor = "#0a7a74";
            }
            else if (this.tables[a].department === "Sonnberg-Zirbn") {
              this.tablesSonnbergZirbn[b].bgColor = "#0a7a74";
            }
            else if (this.tables[a].department === "Restaurant") {
              this.tablesRestaurant[b].bgColor = "#0a7a74";
            }
          }
        }
      }
    }, 1000);
  }
}
