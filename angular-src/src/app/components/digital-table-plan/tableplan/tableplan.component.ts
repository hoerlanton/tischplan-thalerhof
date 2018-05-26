import { Component, OnInit, Input, Output, EventEmitter, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Table } from '../../../../../Table';
import { MainService } from '../../../services/main.service';

@Component({
  selector: 'app-tableplan',
  templateUrl: 'tableplan.component.html',
  styleUrls: ['../main.component.css']
})

export class TableplanComponent implements AfterViewInit {
  @Input('tablesSpeisesaal') tablesSpeisesaal: Table[];
  @Input('showSpeisesaalBool') showSpeisesaalBool: boolean;
  @Input('tablesTerasse') tablesTerasse: Table[];
  @Input('showTerasseBool') showTerasseBool: boolean;
  @Input('tablesWeinstube') tablesWeinstube: Table[];
  @Input('showWeinstubeBool') showWeinstubeBool: boolean;
  @Input('tablesBar') tablesBar: Table[];
  @Input('showBarBool') showBarBool: boolean;
  @Input('showAllBool') showAllBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()movedTerasse: EventEmitter<any> = new EventEmitter();
  @Output()movedBar: EventEmitter<any> = new EventEmitter();
  @Output()movedSpeisesaal: EventEmitter<any> = new EventEmitter();
  @Output()movedWeinstube: EventEmitter<any> = new EventEmitter();
  @Output()changeBgColorIfArrival: EventEmitter<any> = new EventEmitter();
  @Output()adult1SpeisesaalExport: EventEmitter<any> = new EventEmitter();
  @Output()child1SpeisesaalExport: EventEmitter<any> = new EventEmitter();
  @Output()child2SpeisesaalExport: EventEmitter<any> = new EventEmitter();
  @Output()child3SpeisesaalExport: EventEmitter<any> = new EventEmitter();
  @Output()child4SpeisesaalExport: EventEmitter<any> = new EventEmitter();
  @Output()adult1BarExport: EventEmitter<any> = new EventEmitter();
  @Output()child1BarExport: EventEmitter<any> = new EventEmitter();
  @Output()child2BarExport: EventEmitter<any> = new EventEmitter();
  @Output()child3BarExport: EventEmitter<any> = new EventEmitter();
  @Output()child4BarExport: EventEmitter<any> = new EventEmitter();
  @Output()adult1WeinstubeExport: EventEmitter<any> = new EventEmitter();
  @Output()child1WeinstubeExport: EventEmitter<any> = new EventEmitter();
  @Output()child2WeinstubeExport: EventEmitter<any> = new EventEmitter();
  @Output()child3WeinstubeExport: EventEmitter<any> = new EventEmitter();
  @Output()child4WeinstubeExport: EventEmitter<any> = new EventEmitter();
  @Output()adult1TerasseExport: EventEmitter<any> = new EventEmitter();
  @Output()child1TerasseExport: EventEmitter<any> = new EventEmitter();
  @Output()child2TerasseExport: EventEmitter<any> = new EventEmitter();
  @Output()child3TerasseExport: EventEmitter<any> = new EventEmitter();
  @Output()child4TerasseExport: EventEmitter<any> = new EventEmitter();

  buttonMoveTable: string;
  buttonInfo: string;
  buttonHinzufuegen: string;
  buttonEntfernen: string;
  trace: boolean;
  adult1Terasse: any[] = [];
  child1Terasse: any[] = [];
  child2Terasse: any[] = [];
  child3Terasse: any[] = [];
  child4Terasse: any[] = [];
  adult1Weinstube: any[] = [];
  child1Weinstube: any[] = [];
  child2Weinstube: any[] = [];
  child3Weinstube: any[] = [];
  child4Weinstube: any[] = [];
  adult1Bar: any[] = [];
  child1Bar: any[] = [];
  child2Bar: any[] = [];
  child3Bar: any[] = [];
  child4Bar: any[] = [];
  adult1Speisesaal: any[] = [];
  child1Speisesaal: any[] = [];
  child2Speisesaal: any[] = [];
  child3Speisesaal: any[] = [];
  child4Speisesaal: any[] = [];

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
      //console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      //console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      //console.log("response[0].tables.department" + response[0].tables[j].department);

      if (response === null) {
        return;
      } else {
        if (response[0].department === "Terasse") {
          this.movedTerasse.emit(response[0].tables);
          //this.tablesTerasse = response[0].tables;
        }
        else if (response[0].department === "Weinstube") {
          this.movedWeinstube.emit(response[0].tables);
          //this.tablesWeinstube = response[0].tables;
          //this._navService.changeNav(response[0].tables);
        }
        else if (response[0].department === "Bar") {
          this.movedBar.emit(response[0].tables);
          //this.tablesBar = response[0].tables;
        }
        else if (response[0].department === "Speisesaal") {
          this.movedSpeisesaal.emit(response[0].tables);
          //this.tablesSpeisesaal = response[0].tables;
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
      //console.log("topValue:" + JSON.stringify(response[0].tables[j].topValue));
      //console.log("leftValue:" + JSON.stringify(response[0].tables[j].leftValue));
      //console.log("response[0].tables.department" + response[0].tables[j].department);
      if (response === null) {
        return;
      } else {
        if (response[0].department === "Terasse") {
          this.movedTerasse.emit(response[0].tables);
          //this.tablesTerasse = response[0].tables;
        }
        else if (response[0].department === "Weinstube") {
          this.movedWeinstube.emit(response[0].tables);
          //this.tablesWeinstube = response[0].tables;
          //this._navService.changeNav(response[0].tables);
        }
        else if (response[0].department === "Bar") {
          this.movedBar.emit(response[0].tables);
          //this.tablesBar = response[0].tables;
        }
        else if (response[0].department === "Speisesaal") {
          this.movedSpeisesaal.emit(response[0].tables);
          //this.tablesSpeisesaal = response[0].tables;
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
        if (a[b].newTraceText) {
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
    console.log("sumUpNumberOfPersons called");
    if (this.tablesTerasse) {
      for (let p = 0; p < this.tablesTerasse.length; p++) {
        this.adult1Terasse[p] = 0;
        this.child1Terasse[p] = 0;
        this.child2Terasse[p] = 0;
        this.child3Terasse[p] = 0;
        this.child4Terasse[p] = 0;
        if (this.tablesTerasse[p].groups) {
          for (let g = 0; g < this.tablesTerasse[p].groups.length; g++) {
            if (this.tablesTerasse[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesTerasse[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adult1Terasse[p] = this.adult1Terasse[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.child1Terasse[p] = this.child1Terasse[p] + Number(adult[1]);
                this.child2Terasse[p] = this.child2Terasse[p] + Number(adult[2]);
                this.child3Terasse[p] = this.child3Terasse[p] + Number(adult[3]);
                this.child4Terasse[p] = this.child4Terasse[p] + Number(adult[4]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesWeinstube) {
      for (let p = 0; p < this.tablesWeinstube.length; p++) {
        this.adult1Weinstube[p] = 0;
        this.child1Weinstube[p] = 0;
        this.child2Weinstube[p] = 0;
        this.child3Weinstube[p] = 0;
        this.child4Weinstube[p] = 0;
        if (this.tablesWeinstube[p].groups) {
          for (let g = 0; g < this.tablesWeinstube[p].groups.length; g++) {
            if (this.tablesWeinstube[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesWeinstube[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adult1Weinstube[p] = this.adult1Weinstube[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.child1Weinstube[p] = this.child1Weinstube[p] + Number(adult[1]);
                this.child2Weinstube[p] = this.child2Weinstube[p] + Number(adult[2]);
                this.child3Weinstube[p] = this.child3Weinstube[p] + Number(adult[3]);
                this.child4Weinstube[p] = this.child4Weinstube[p] + Number(adult[4]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesBar) {
      for (let p = 0; p < this.tablesBar.length; p++) {
        this.adult1Bar[p] = 0;
        this.child1Bar[p] = 0;
        this.child2Bar[p] = 0;
        this.child3Bar[p] = 0;
        this.child4Bar[p] = 0;
        if (this.tablesBar[p].groups) {
          for (let g = 0; g < this.tablesBar[p].groups.length; g++) {
            if (this.tablesBar[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesBar[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adult1Bar[p] = this.adult1Bar[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.child1Bar[p] = this.child1Bar[p] + Number(adult[1]);
                this.child2Bar[p] = this.child2Bar[p] + Number(adult[2]);
                this.child3Bar[p] = this.child3Bar[p] + Number(adult[3]);
                this.child4Bar[p] = this.child4Bar[p] + Number(adult[4]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    if (this.tablesSpeisesaal) {
      for (let p = 0; p < this.tablesSpeisesaal.length; p++) {
        this.adult1Speisesaal[p] = 0;
        this.child1Speisesaal[p] = 0;
        this.child2Speisesaal[p] = 0;
        this.child3Speisesaal[p] = 0;
        this.child4Speisesaal[p] = 0;
        if (this.tablesSpeisesaal[p].groups) {
          for (let g = 0; g < this.tablesSpeisesaal[p].groups.length; g++) {
            if (this.tablesSpeisesaal[p].groups[g].numberOfPersonsValue) {
              let adult = this.tablesSpeisesaal[p].groups[g].numberOfPersonsValue.match(/\d+/g);
              if (adult != null) {
                //console.log(adult);
                this.adult1Speisesaal[p] = this.adult1Speisesaal[p] + Number(adult[0]);
                //console.log(this.adult[p]);
              }
              if (adult != null) {
                //console.log(adult);
                this.child1Speisesaal[p] = this.child1Speisesaal[p] + Number(adult[1]);
                this.child2Speisesaal[p] = this.child2Speisesaal[p] + Number(adult[2]);
                this.child3Speisesaal[p] = this.child3Speisesaal[p] + Number(adult[3]);
                this.child4Speisesaal[p] = this.child4Speisesaal[p] + Number(adult[4]);
                //console.log(this.child[p]);
              }
            }
          }
        }
      }
    }
    this.adult1SpeisesaalExport.emit(this.adult1Speisesaal);
    this.child1SpeisesaalExport.emit(this.child1Speisesaal);
    this.child2SpeisesaalExport.emit(this.child2Speisesaal);
    this.child3SpeisesaalExport.emit(this.child3Speisesaal);
    this.child4SpeisesaalExport.emit(this.child4Speisesaal);
    this.adult1BarExport.emit(this.adult1Bar);
    this.child1BarExport.emit(this.child1Bar);
    this.child2BarExport.emit(this.child2Bar);
    this.child3BarExport.emit(this.child3Bar);
    this.child4BarExport.emit(this.child4Bar);
    this.adult1WeinstubeExport.emit(this.adult1Weinstube);
    this.child1WeinstubeExport.emit(this.child1Weinstube);
    this.child2WeinstubeExport.emit(this.child2Weinstube);
    this.child3WeinstubeExport.emit(this.child3Weinstube);
    this.child4WeinstubeExport.emit(this.child4Weinstube);
    this.adult1TerasseExport.emit(this.adult1Terasse);
    this.child1TerasseExport.emit(this.child1Terasse);
    this.child2TerasseExport.emit(this.child2Terasse);
    this.child3TerasseExport.emit(this.child3Terasse);
    this.child4TerasseExport.emit(this.child4Terasse);
  }
}
