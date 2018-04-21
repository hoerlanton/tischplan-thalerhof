import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Table } from '../../../../../Table';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-tableplan',
  templateUrl: 'tableplan.component.html',
  styleUrls: ['../main.component.css']
})

export class TableplanComponent implements AfterViewInit {
  @Input('tablesWintergarten') tablesWintergarten: Table[];
  @Input('showWintergartenBool') showWintergartenBool: boolean;
  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: Table[];
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: boolean;
  @Input('tablesPanorama') tablesPanorama: Table[];
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Input('tablesRestaurant') tablesRestaurant: Table[];
  @Input('showRestaurantBool') showRestaurantBool: boolean;
  @Input('showAllBool') showAllBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()
  movedSonnbergZirbn: EventEmitter<any> = new EventEmitter();
  @Output()
  movedRestaurant: EventEmitter<any> = new EventEmitter();
  @Output()
  movedWintergarten: EventEmitter<any> = new EventEmitter();
  @Output()
  movedPanorama: EventEmitter<any> = new EventEmitter();
  @Output()
  changeBgColorIfArrival: EventEmitter<any> = new EventEmitter();
  @Output()
  childWintergartenExport:EventEmitter<any> = new EventEmitter();
  @Output()
  adultWintergartenExport:EventEmitter<any> = new EventEmitter();
  @Output()
  adultRestaurantExport:EventEmitter<any> = new EventEmitter();
  @Output()
  childRestaurantExport:EventEmitter<any> = new EventEmitter();
  @Output()
  adultPanoramaExport:EventEmitter<any> = new EventEmitter();
  @Output()
  childPanoramaExport:EventEmitter<any> = new EventEmitter();
  @Output()
  adultSonnbergZirbnExport:EventEmitter<any> = new EventEmitter();
  @Output()
  childSonnbergZirbnExport:EventEmitter<any> = new EventEmitter();

  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  trace: boolean;
  adultSonnbergZirbn: any[] = [];
  childSonnbergZirbn: any[] = [];
  adultPanorama: any[] = [];
  childPanorama: any[] = [];
  adultRestaurant: any[] = [];
  childRestaurant: any[] = [];
  adultWintergarten: any[] = [];
  childWintergarten: any[] = [];

  constructor(private mainService: MainService) {
    this.buttonMoveTable = "ff0000";
    this.buttonInfo = "ffffff";
    this.buttonHinzufuegen = "ffffff";
    this.buttonEntfernen = "ffffff";
    this.trace = false;
  }

  ngAfterViewInit() {
  }

  addTable(table, j) {
    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.mainService.addTable(table).subscribe(response => {

      for (let a = 0; a < response[0].tables.length; a++) {
        response[0].tables.sort(function (a, b) {
          if (Number(a.number) < Number(b.number))
            return -1;
          if (Number(a.number) > Number(b.number))
            return 1;
          return 0;
        });
      }

      console.log('Response:' + JSON.stringify(response));
      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      console.log("response[0].tables.department" + response[0].tables[j].department);

      if (response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.movedSonnbergZirbn.emit(response[0].tables);
          //this.tablesSonnbergZirbn = response[0].tables;
        }
        else if (response[0].tables[j].department === "Panorama") {
          this.movedPanorama.emit(response[0].tables);
          //this.tablesPanorama = response[0].tables;
          //this._navService.changeNav(response[0].tables);
        }
        else if (response[0].tables[j].department === "Restaurant") {
          this.movedRestaurant.emit(response[0].tables);
          //this.tablesRestaurant = response[0].tables;
        }
        else if (response[0].tables[j].department === "Wintergarten") {
          this.movedWintergarten.emit(response[0].tables);
          //this.tablesWintergarten = response[0].tables;
        }
      }
      this.changeBgColorIfArrival.emit();
    });
  }

  removeTable(table, j) {
    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.mainService.removeTable(table).subscribe(response => {

      for (let a = 0; a < response[0].tables.length; a++) {
        response[0].tables.sort(function (a, b) {
          if (Number(a.number) < Number(b.number))
            return -1;
          if (Number(a.number) > Number(b.number))
            return 1;
          return 0;
        });
      }

      console.log('Response:' + JSON.stringify(response));
      //console.log("topValue:" + JSON.stringify(response[0].tables[0].topValue));
      console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      console.log("response[0].tables.department" + response[0].tables[j].department);
      if (response === null) {
        return;
      } else {
        if (response[0].tables[j].department === "Sonnberg-Zirbn") {
          this.movedSonnbergZirbn.emit(response[0].tables);
          //this.tablesSonnbergZirbn = response[0].tables;
        }
        else if (response[0].tables[j].department === "Panorama") {
          this.movedPanorama.emit(response[0].tables);
          //this.tablesPanorama = response[0].tables;
          //this._navService.changeNav(response[0].tables);
        }
        else if (response[0].tables[j].department === "Restaurant") {
          this.movedRestaurant.emit(response[0].tables);
          //this.tablesRestaurant = response[0].tables;
        }
        else if (response[0].tables[j].department === "Wintergarten") {
          this.movedWintergarten.emit(response[0].tables);
          //this.tablesWintergarten = response[0].tables;
        }
      }
      this.changeBgColorIfArrival.emit();
    });
  }

  getStyle(a) {
    //console.log("a");
    //console.log(a);
    if (typeof a === "undefined") {
      return "solid 3px rgb(243, 239, 228)";
    } else {
      for (let b = 0; b < a.length; b++) {
        //console.log("LOOOOOOOOOOOOOOP");
        //console.log(a[b].traceValue);
        if (a[b].traceValue != "-" || a[b].newTraceText) {
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

  none(event) {
    event.stopPropagation();
  }

  mouseEnterMoveTableButton() {
    console.log("mouse enter : ");
    if (this.buttonMoveTable === "ff0000") {
      console.log('mouse enter1 :');
      this.buttonMoveTable = "bc0000";
    }
  }

  mouseLeaveMoveTableButton() {
    if (this.buttonMoveTable === "bc0000") {
      console.log('mouse leave1 :');
      this.buttonMoveTable = "ff0000";
    }
  }

  mouseEnterInfoButton() {
    console.log("mouse enter : ");
    if (this.buttonInfo === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonInfo = "cfcfcf";
    }
  }

  mouseLeaveInfoButton() {
    if (this.buttonInfo === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonInfo = "ffffff";
    }
  }

  mouseEnterHinzufuegenButton() {
    console.log("mouse enter : ");
    if (this.buttonHinzufuegen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonHinzufuegen = "cfcfcf";
    }
  }

  mouseLeaveHinzufuegenButton() {
    if (this.buttonHinzufuegen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonHinzufuegen = "ffffff";
    }
  }

  mouseEnterEntfernenButton() {
    console.log("mouse enter : ");
    if (this.buttonEntfernen === "ffffff") {
      console.log('mouse enter1 :');
      this.buttonEntfernen = "cfcfcf";
    }
  }

  mouseLeaveEntfernenButton() {
    if (this.buttonEntfernen === "cfcfcf") {
      console.log('mouse leave1 :');
      this.buttonEntfernen = "ffffff";
    }
  }

  getStyleTrace(j) {
    if (j != "-") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

  sumUpNumberOfPersons(){
    console.log("sumUpNumberOfPersons calld");
    if (this.tablesSonnbergZirbn) {
      for (let p = 0; p < this.tablesSonnbergZirbn.length; p++) {
        this.adultSonnbergZirbn[p] = 0;
        this.childSonnbergZirbn[p] = 0;
        if (this.tablesSonnbergZirbn[p].groups) {
          for (let g = 0; g < this.tablesSonnbergZirbn[p].groups.length; g++) {
            if (this.tablesSonnbergZirbn[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesSonnbergZirbn[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adultSonnbergZirbn[p] = this.adultSonnbergZirbn[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.childSonnbergZirbn[p] = this.childSonnbergZirbn[p] + Number(adult[1]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesPanorama) {
      for (let p = 0; p < this.tablesPanorama.length; p++) {
        this.adultPanorama[p] = 0;
        this.childPanorama[p] = 0;
        if (this.tablesPanorama[p].groups) {
          for (let g = 0; g < this.tablesPanorama[p].groups.length; g++) {
            if (this.tablesPanorama[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesPanorama[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adultPanorama[p] = this.adultPanorama[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.childPanorama[p] = this.childPanorama[p] + Number(adult[1]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesRestaurant) {
      for (let p = 0; p < this.tablesRestaurant.length; p++) {
        this.adultRestaurant[p] = 0;
        this.childRestaurant[p] = 0;
        if (this.tablesRestaurant[p].groups) {
          for (let g = 0; g < this.tablesRestaurant[p].groups.length; g++) {
            if (this.tablesRestaurant[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesRestaurant[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adultRestaurant[p] = this.adultRestaurant[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.childRestaurant[p] = this.childRestaurant[p] + Number(adult[1]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesWintergarten) {
      for (let p = 0; p < this.tablesWintergarten.length; p++) {
        this.adultWintergarten[p] = 0;
        this.childWintergarten[p] = 0;
        if (this.tablesWintergarten[p].groups) {
          for (let g = 0; g < this.tablesWintergarten[p].groups.length; g++) {
            if (this.tablesWintergarten[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesWintergarten[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adultWintergarten[p] = this.adultWintergarten[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.childWintergarten[p] = this.childWintergarten[p] + Number(adult[1]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    this.childWintergartenExport.emit(this.childWintergarten);
    this.adultWintergartenExport.emit(this.adultWintergarten);
    this.adultRestaurantExport.emit(this.adultRestaurant);
    this.childRestaurantExport.emit(this.childRestaurant);
    this.adultPanoramaExport.emit(this.adultPanorama);
    this.childPanoramaExport.emit(this.childPanorama);
    this.adultSonnbergZirbnExport.emit(this.adultSonnbergZirbn);
    this.childSonnbergZirbnExport.emit(this.childSonnbergZirbn);
  }
}
