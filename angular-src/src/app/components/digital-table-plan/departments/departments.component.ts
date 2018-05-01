import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Table } from '../../../../../Table';
import { SpeisesaalComponent } from './speisesaal/speisesaal.component';
import {AllComponent} from "./all/all.component";
import {WeinstubeComponent} from "./weinstube/weinstube.component";
import {BarComponent} from "./bar/bar.component";
import {TerasseComponent} from "./terasse/terasse.component";

@Component({
  selector: 'app-departments',
  templateUrl: 'departments.component.html',
  styleUrls: ['../main.component.css']
})

export class DepartmentsComponent {

  @Input('tablesSpeisesaal') tablesSpeisesaal: Table[];
  @Input('showSpeisesaalBool') showSpeisesaalBool: boolean;
  @Input('tablesTerasse') tablesTerasse: Table[];
  @Input('showTerasseBool') showTerasseBool: boolean;
  @Input() tablesWeinstube: Table[];
  @Input('tables') tables: any;
  @Input('showWeinstubeBool') showWeinstubeBool: boolean;
  @Input('tablesBar') tablesBar: Table[];
  @Input('showBarBool') showBarBool: boolean;
  @Input('showAllBool') showAllBool: boolean;
  @Input() tablesTempDeparture: any;
  @Input('term') term: string;
  @ViewChild(AllComponent)
  private allComponent: AllComponent;

  @ViewChild(WeinstubeComponent)
  private panoramaComponent: WeinstubeComponent;

  @ViewChild(BarComponent)
  private restaurantComponent: BarComponent;

  @ViewChild(SpeisesaalComponent)
  private wintergartenComponent: SpeisesaalComponent;

  @ViewChild(TerasseComponent)
  private sonnbergZirbnComponent: TerasseComponent;

  @Output()
  dispensedTerasse:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedBar:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedSpeisesaal:EventEmitter<any> = new EventEmitter();
  @Output()
  dispensedWeinstube:EventEmitter<any> = new EventEmitter();
  @Output()
  updateAzList:EventEmitter<any> = new EventEmitter();
  @Output()
  updateImHausListElement:EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  parts: any[] = [];
  date: any[] = [];
  parsedDate: any[] = [];
  a: any;
  b: any;
  tablesChangeBgColorIfArrival: any;

  constructor( private mainService: MainService) {
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
    this.mainService.dispenseTable(table).subscribe(response => {
      console.log("Dispense Table:");
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isOccupied:" + JSON.stringify(response[0].tables[j].isOccupied));
      console.log(JSON.stringify(response));

      if (response === null || typeof response[0].tables[j].groups == null) {
        return;
      } else {

        response[0].tables.sort(function (a, b) {
          if (Number(a.number) < Number(b.number))
            return -1;
          if (Number(a.number) > Number(b.number))
            return 1;
          return 0;
        });

        if (response[0].tables[j].department === "Terasse") {
          this.dispensedTerasse.emit(response[0].tables);
        } else if (response[0].tables[j].department === "Weinstube") {
          this.dispensedWeinstube.emit(response[0].tables);
        } else if (response[0].tables[j].department === "Bar") {
          this.dispensedBar.emit(response[0].tables);
        } else if (response[0].tables[j].department === "Speisesaal") {
          this.dispensedSpeisesaal.emit(response[0].tables);
          console.log("Speisesaal" + JSON.stringify(response[0].tables));
        }
      }
    },
      error => console.log("Error: ", error),
      () => {
        console.log(table);
        this.updateAzList.emit();
        if (table.length > 1) {
          for (let i = 0; i < table.length; i++) {
            this.updateImHausListElement.emit(table[i].table);
          }
        } else {
          if (table.constructor === Array) {
            console.log("isarray");
            this.updateImHausListElement.emit(table[0].table);
          } else {
            this.updateImHausListElement.emit(table);
          }
        }
      });

    this.mainService.addPlaceholder(table).subscribe(response => {
      console.log("Add placeholder!");
      //console.log(this.tablesTerasse[j].placeholder);
      console.log("placeholder:" + JSON.stringify(response));

    });

  }

  addInformationToTable(dataString, arrayIndex) {
    console.log("dataString");
    console.log(dataString);
    this.mainService.addInformationToTable(dataString)
      .subscribe(response => {
          // let arrayIndex = response[1];
          console.log("RESPONSE addInformationToTable:" + JSON.stringify(response));
          if (response === null) {
            return;
          } else {
            if (response[0].department === "Terasse") {
              this.dispensedTerasse.emit(response[0].tables);
            }
            else if (response[0].department === "Weinstube") {
              this.dispensedWeinstube.emit(response[0].tables);
            }
            else if (response[0].department === "Bar") {
              this.dispensedBar.emit(response[0].tables);
            }
            else if (response[0].department === "Speisesaal") {
              this.dispensedSpeisesaal.emit(response[0].tables);
            }
          }
        }
        // console.log(this.tablesTerasse[arrayIndex]);
      )
  };

  occupyTableOnDrop(dataString, arrayIndex) {
    console.log("Occupy Table!");
    console.log(dataString);
    this.mainService.occupyTable(dataString)
      .subscribe(response => {
        //let arrayIndex = response[1];
        //console.log("arrayIndex:" + arrayIndex);
        //console.log("bgColor:" + JSON.stringify(response[0].tables[arrayIndex].bgColor));

        console.log("Response occupyTable:" + JSON.stringify(response));
        if (response === null) {
          return;
        } else {
          if (response.tables[0].department === "Terasse") {
            this.tablesTerasse[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Weinstube") {
            this.tablesWeinstube[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Bar") {
            this.tablesBar[arrayIndex] = response.tables[0];
          }
          else if (response.tables[0].department === "Speisesaal") {
            this.tablesSpeisesaal[arrayIndex] = response.tables[0];
          }
        }
        this.updateAzList.emit();
      });
  }

  changeBgColorIfArrival() {
    setTimeout(() => {
      this.tablesChangeBgColorIfArrival = this.tablesTempDeparture;
      //console.log('changeBgColorIfArrival calld');
      //console.log(this.tablesChangeBgColorIfArrival);
      this.dateTodayGenerated = new Date();
      this.parts = [];
      this.parsedDate = [];
      this.date = [];

      for (let a = 0; a < this.tablesChangeBgColorIfArrival.length; a++) {
        for (let b = 0; b < this.tablesChangeBgColorIfArrival[a].tables.length; b++) {
          if (this.tablesChangeBgColorIfArrival[a].tables[b].groups) {
            for (let c = 0; c < this.tablesChangeBgColorIfArrival[a].tables[b].groups.length; c++) {
              if (this.tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue) {
                //console.log('tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue: ' + c + " " + this.tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue);
                this.parts[0] = this.tablesChangeBgColorIfArrival[a].tables[b].groups[c].arrivalValue.match(/(\d+)/g);
              } else {
                this.parts[0] = "undefined";
              }
              if (this.parts[0]) {
                this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
                this.parsedDate[0] = String(this.date[0]).substring(0, 15);
              }
              // note parts[1]-1
              // console.log('parts[2]' + parts[2] + 'parts[1]' + (parts[1] - 1) + 'parts[0]' + parts[0]);
              // Mon May 31 2010 00:00:00
              // this.tablesBar[j].arrivalValue
              let dateToday = String(this.dateTodayGenerated).substring(0, 15);
              //console.log('Parsed Date --->: ' + this.parsedDate[0]);
              //console.log('this.dateGenerated --->: ' + dateToday);
              if (dateToday.indexOf(this.parsedDate[0]) !== -1) {
                if (this.tablesChangeBgColorIfArrival[a].department === "Weinstube") {
                  //console.log(this.tablesWeinstube);
                  if (this.tablesWeinstube[b]) {
                    //console.log(this.tablesWeinstube[b]);
                    this.tablesWeinstube[b].bgColor = "#0a7a74";
                  }
                }
                else if (this.tablesChangeBgColorIfArrival[a].department === "Speisesaal") {
                  if (this.tablesSpeisesaal[b]) {
                    this.tablesSpeisesaal[b].bgColor = "#0a7a74";
                  }
                }
                else if (this.tablesChangeBgColorIfArrival[a].department === "Terasse") {
                  if (this.tablesTerasse[b]) {
                    this.tablesTerasse[b].bgColor = "#0a7a74";
                  }
                }
                else if (this.tablesChangeBgColorIfArrival[a].department === "Bar") {
                  if (this.tablesBar[b]) {
                    this.tablesBar[b].bgColor = "#0a7a74";
                  }
                }
              }
            }
          }
        }
      }
    }, 1000);
  }

  transform(term) {
      if (this.showWeinstubeBool) {
      this.panoramaComponent.transform(this.tablesWeinstube, term);
       } else if (this.showBarBool) {
       this.restaurantComponent.transform(this.tablesBar, term);
       } else if (this.showSpeisesaalBool) {
       this.wintergartenComponent.transform(this.tablesSpeisesaal, term);
       } else if (this.showTerasseBool) {
       this.sonnbergZirbnComponent.transform(this.tablesTerasse, term);
       } else if (this.showAllBool) {
        this.allComponent.transform(this.tables, term);

      }
    }
}
