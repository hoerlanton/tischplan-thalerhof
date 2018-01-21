import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { TischplanService } from '../../../services/tischplan.service';
import { Table } from '../../../../../Table';
import { WintergartenComponent } from './wintergarten/wintergarten.component';

@Component({
  selector: 'app-departments',
  templateUrl: 'departments.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class DepartmentsComponent implements OnInit {

  @Input('tablesWintergarten') tablesWintergarten: Table[];
  @Input('showWintergartenBool') showWintergartenBool: boolean;
  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: Table[];
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: boolean;
  @Input('tablesPanorama') tablesPanorama: Table[];
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Input('tablesRestaurant') tablesRestaurant: Table[];
  @Input('showRestaurantBool') showRestaurantBool: boolean;

  constructor(private tischplanService: TischplanService) {
  }

  ngOnInit() {
  }

  occupied(table){
    console.log("table.j");
    console.log(table.j);
    console.log("table");
    console.log(table);
    this.occupy(table.table, table.j);
  }

  occupy(table, j) {

    this.tischplanService.dispenseTable(table).subscribe(response => {
      console.log("Dispense Table:");
      console.log("bgColor:" + JSON.stringify(response[0].tables[j].bgColor));
      console.log("isBesetzt:" + JSON.stringify(response[0].tables[j].isBesetzt));
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
            if (response[0].tables.department === "Sonnberg-Zirbn") {
              this.tablesSonnbergZirbn = response[0].tables;
          } else if (response[0].tables.department === "Panorama") {
              this.tablesPanorama = response[0].tables;
            } else if (response[0].tables.department === "Restaurant") {
              this.tablesRestaurant = response[0].tables;
            } else if (response[0].tables.department === "Wintergarten") {
              this.tablesWintergarten = response[0].tables;
            }
        }
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
      });
  }

  moveTable(table, j) {
    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.moveTable(table).subscribe(response => {
      console.log('Response:' + JSON.stringify(response));
      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      if (response === null) {
        return;
      } else {
        if (response[0].tables.department === "Sonnberg-Zirbn") {
          this.tablesSonnbergZirbn = response[0].tables;
        }
        else if (response[0].tables.department === "Panorama") {
          this.tablesPanorama = response[0].tables;
        }
        else if (response[0].tables.department === "Restaurant") {
          this.tablesRestaurant = response[0].tables;
        }
        else if (response[0].tables.department === "Wintergarten") {
          this.tablesWintergarten = response[0].tables;
        }
      }
    });
  }
}
