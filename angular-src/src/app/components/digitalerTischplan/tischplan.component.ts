import { Component, ViewChild} from '@angular/core';
import { TischplanService } from '../../services/tischplan.service';
import { DragulaService } from "ng2-dragula";
import { ImHausListe } from '../../../../ImHausListe';
import { AnreiseListe } from '../../../../AnreiseListe';
import { Table } from '../../../../Table';
import { PrintComponent }  from './print/print.component';
import { DepartmentmenuComponent }  from './departmentmenu/departmentmenu.component';
import { FormComponent }  from './form/form.component';
import { ImHausListeComponent } from './im-haus-liste/im-haus-liste.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableplanComponent } from './tableplan/tableplan.component';
import { AnreiseListeComponent } from './anreise-liste/anreise-liste.component';
import { TracesListeComponent } from './traces-liste/traces-liste.component';
import { UploadComponent } from './upload/upload.component';
import { DepartmentsComponent } from './departments/departments.component';
import { NavService }   from '../../services/tables.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'tischplan',
  templateUrl: 'tischplan.component.html',
  styleUrls: ['tischplan.component.css']
})

export class TischplanComponent {
  @ViewChild(PrintComponent)
  private printComponent: PrintComponent;
  @ViewChild(DepartmentmenuComponent)
  private departmentmenuComponent: DepartmentmenuComponent;
  @ViewChild(FormComponent)
  private formComponent: FormComponent;
  @ViewChild(DepartmentsComponent)
  private departmentsComponent: DepartmentsComponent;
  @ViewChild(ImHausListeComponent)
  private imHausListeComponent: ImHausListeComponent;
  @ViewChild(NavigationComponent)
  private navigationComponent: NavigationComponent;
  @ViewChild(TableplanComponent)
  private tableplanComponent: TableplanComponent;
  @ViewChild(AnreiseListeComponent)
  private anreiseListeComponent: AnreiseListeComponent;
  @ViewChild(TracesListeComponent)
  private tracesListeComponent: TracesListeComponent;
  @ViewChild(UploadComponent)
  private uploadComponent: UploadComponent;

  //item: any;
  subscription:Subscription;
  buttonBgColor1: string;
  buttonBgColor2: string;
  buttonBgColor3: string;
  buttonBgColor4: string;
  buttonBgColor5: string;
  fontColor1: string;
  fontColor2: string;
  fontColor3: string;
  fontColor4: string;
  fontColor5: string;
  buttonBgColorInfoForm: string;
  buttonBgColorNotizForm: string;
  fontColorInfoForm: string;
  fontColorNotizForm: string;
  showInfoshowNotizFormBoolFormBool: boolean;
  showNotizFormBool: boolean;
  showAlleBool: boolean;
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
  notizElements: any[] = [];
  term: string;
  dateTodayGenerated: any;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  quellTisch: any;
  zielTisch: any;
  tableInformation: any[] = [];

  constructor(private tischplanService: TischplanService, private dragulaService: DragulaService, private _navService:NavService) {

    //this.subscription = this._navService.navItem$
    //  .subscribe(tables => this.tablesPanorama = tables);

    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNotizForm = "0a7a74";
    this.fontColorInfoForm = "f3efe4";
    this.fontColorNotizForm = "f3efe4";
    this.dateGeneratedListe = new Date();
    this.buttonBgColor1 = "0a7a74";
    this.buttonBgColor2 = "0a7a74";
    this.buttonBgColor3 = "0a7a74";
    this.buttonBgColor4 = "0a7a74";
    this.buttonBgColor5 = "0a7a74";
    this.fontColor1 = "f3efe4";
    this.fontColor2 = "f3efe4";
    this.fontColor3 = "f3efe4";
    this.fontColor4 = "f3efe4";
    this.fontColor5 = "f3efe4";
    this.tablesOccupied = 0;
    this.backgroundColor = "ffffff";
    this.showSonnbergZirbnBool = false;
    this.showPanoramaBool = false;
    this.showRestaurantBool = false;
    this.showWintergartenBool = false;
    this.showAlleBool = false;

    this.tischplanService.getImHausListe()
      .subscribe(imHausListeElemente => {
        if(imHausListeElemente === null) {
          return;
        } else {

          imHausListeElemente.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
          });

          this.imHausListeElemente = imHausListeElemente;
          console.log(this.imHausListeElemente);
        }
      });

    this.tischplanService.getAnreiseListe()
      .subscribe(anreiseListeElemente => {
        if(anreiseListeElemente === null) {
          return;
        } else {

          anreiseListeElemente.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
          });

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

    this.tischplanService.getNotizElements()
      .subscribe(informationElemente => {
        if(informationElemente === null) {
          return;
        } else {
          this.notizElements = informationElemente;
          console.log(this.notizElements);
        }
      });

    this.tischplanService.getTables()
      .subscribe(tables => {
        if(tables === null) {
          return;
        } else {
        console.log("TABLES LENGTH: " + tables.length);
          tables[3].tables.sort(function(a, b){
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
          this.changeBgColorIfAnreise(tables);
          //this.dispenseIfAbreise(tables);
        }

        console.log(this.tablesPanorama);
        console.log(this.tablesWintergarten);
        console.log(this.tablesSonnbergZirbn);
        console.log(this.tablesRestaurant);

        this.tables = this.tables.concat(this.tablesWintergarten).concat(this.tablesRestaurant).concat(this.tablesPanorama).concat(this.tablesSonnbergZirbn);
        this.printComponent.formatAzListe(this.tables);

        console.log("this.tables");
        console.log(this.tables);
      });

    this.tischplanService.getTracesListe()
      .subscribe(tracesListeElemente  => {
        if(tracesListeElemente === null) {
          return;
        } else {

          tracesListeElemente.sort(function(a, b){
            if(a.name < b.name) return -1;
            if(a.name > b.name) return 1;
            return 0;
          });


          console.log('92' + JSON.stringify(tracesListeElemente));
          //console.log("2:" + tracesListeElemente[0].data[0]);
          //console.log(tracesListeElemente[0].data.length);
          //this.tracesListeElemente = tracesListeElemente[0].data;
          this.tracesListeElemente = tracesListeElemente;
          //this.formatTracesListeElements(tracesListeElemente);
        }
      });
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

  private onDrag(args) {
    let [e, el] = args;
  }
  private onDrop(args) {
    let [e, el] = args;
      //console.log("Args = ");
    let information = args[0].innerText;
      //console.log("information: " + information);
    let informationElements = information.split(/\n/);
      //console.log(informationElements);
    let informationElements2 = [];
    for (let s = 0; s < informationElements.length; s++) {
      informationElements2.push(informationElements[s].split(/:(.+)/)[1]);
      if (informationElements2[s] === undefined) {
        informationElements2[s] = informationElements[s]
      }
    }
      //console.log(informationElements2);
    let department = JSON.stringify(args[1].id);
      //console.log("departement" + department);
    let departementSubstring = department.substring(1, department.length - 1);
        //console.log("departementSubstring" + departementSubstring);
    let tableNumber = args[1].innerText;
    let numbers = tableNumber.match(/\d+/g);
      //console.log("numbers: " + numbers);
    let arrayIndex = numbers[1];
      //console.log("arrayIndex: " + arrayIndex);
    let tableNumberSubstring = "";
      //console.log("tableNumber" + tableNumber);
    tableNumberSubstring = tableNumber.toString().match(/\d+/);
      //console.log("tableNumberSubstring" + tableNumberSubstring);
    let dataString = [];
    dataString.push(information + departementSubstring + tableNumberSubstring);
      console.log('dataString' + dataString);
    this.departmentsComponent.addInformationToTable(dataString, arrayIndex);
    this.departmentsComponent.occupyTableOnDrop(dataString, arrayIndex);
    this.imHausListeComponent.updateImHausListeElement(informationElements2);
    this.anreiseListeComponent.updateAnreiseListeElement(informationElements2);
    this.tracesListeComponent.updateTracesListeElement(informationElements2);
  }
  private onOver(args) {
    let [e, el, container] = args;
  }
  private onOut(args) {
    let [e, el, container] = args;
  }
  ngOnInit() {
  }
  upload() {
    this.uploadComponent.upload();
  }
  showWintergarten(){
    this.departmentmenuComponent.showWintergarten();
  }
  showRestaurant(){
    this.departmentmenuComponent.showRestaurant();
  }
  showSonnbergZirbn(){
    this.departmentmenuComponent.showWintergarten();
  }
  showPanorama(){
    this.departmentmenuComponent.showPanorama();
  }
  moveTable(table, j) {
    this.tableplanComponent.moveTable(table, j);
  }
  sendInformation(event) {
    this.formComponent.sendInformation(event);
  }
  delete(informationElement, j, event) {
    this.navigationComponent.delete(informationElement, j, event);
  }
  changeBgColorIfAnreise(tables) {
    console.log('=================================================changeBgColorIfAnreise');
    this.dateTodayGenerated = new Date();

    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {

        if (tables[a].tables[b].anreiseValue) {
          console.log('tables[a].tables[b].anreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
          this.parts[0] = tables[a].tables[b].anreiseValue.match(/(\d+)/g);} else {
          this.parts[0] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue2) {
          this.parts[1] = tables[a].tables[b].anreiseValue2.match(/(\d+)/g);}else {
          this.parts[1] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue3) {
          this.parts[2] = tables[a].tables[b].anreiseValue3.match(/(\d+)/g);}else {
          this.parts[2] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue4) {
          this.parts[3] = tables[a].tables[b].anreiseValue4.match(/(\d+)/g);}else {
          this.parts[3] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue5) {
          this.parts[4] = tables[a].tables[b].anreiseValue5.match(/(\d+)/g);}else {
          this.parts[4] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue6) {
          this.parts[5] = tables[a].tables[b].anreiseValue6.match(/(\d+)/g);}else {
          this.parts[5] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue7) {
          this.parts[6] = tables[a].tables[b].anreiseValue7.match(/(\d+)/g);}else {
          this.parts[6] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue8) {
          this.parts[7] = tables[a].tables[b].anreiseValue8.match(/(\d+)/g);}else {
          this.parts[7] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue9) {
          this.parts[8] = tables[a].tables[b].anreiseValue9.match(/(\d+)/g);}else {
          this.parts[8] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue10) {
          this.parts[9] = tables[a].tables[b].anreiseValue10.match(/(\d+)/g);}else {
          this.parts[9] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue11) {
          this.parts[10] = tables[a].tables[b].anreiseValue11.match(/(\d+)/g);}else {
          this.parts[10] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue12) {
          this.parts[11] = tables[a].tables[b].anreiseValue12.match(/(\d+)/g);}else {
          this.parts[11] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue13) {
          this.parts[12] = tables[a].tables[b].anreiseValue13.match(/(\d+)/g);}else {
          this.parts[12] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue14) {
          this.parts[13] = tables[a].tables[b].anreiseValue14.match(/(\d+)/g);}else {
          this.parts[13] = "undefined";
        }
        if (tables[a].tables[b].anreiseValue15) {
          this.parts[14] = tables[a].tables[b].anreiseValue15.match(/(\d+)/g);}else {
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
        console.log('Parsed Date --->: ' + this.parsedDate[0]);
        console.log('this.dateGenerated --->: ' + dateToday);
        if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
          if (tables[a].department === "Panorama") {
            this.tablesPanorama[b].bgColor = "#0a7a74";
          }
          else if (tables[a].department === "Wintergarten") {
            this.tablesWintergarten[b].bgColor = "#0a7a74";
          }
          else if (tables[a].department === "Sonnberg-Zirbn") {
            this.tablesSonnbergZirbn[b].bgColor = "#0a7a74";
          }
          else if (tables[a].department === "Restaurant") {
            this.tablesRestaurant[b].bgColor = "#0a7a74";
          }
        }
      }
    }
  }
/*
  dispenseIfAbreise(tables) {
    console.log('=================================================dispenseIfAbreise');
    this.dateTodayGenerated = new Date();

    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {

        if (tables[a].tables[b].abreiseValue) {
          console.log('tables[a].tables[b].abreiseValue: ' + b + " " + tables[a].tables[b].anreiseValue);
          this.parts[0] = tables[a].tables[b].abreiseValue.match(/(\d+)/g);} else {
          this.parts[0] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue2) {
          this.parts[1] = tables[a].tables[b].abreiseValue2.match(/(\d+)/g);}else {
          this.parts[1] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue3) {
          this.parts[2] = tables[a].tables[b].abreiseValue3.match(/(\d+)/g);}else {
          this.parts[2] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue4) {
          this.parts[3] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
          this.parts[3] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue4) {
          this.parts[4] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
          this.parts[4] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue4) {
          this.parts[5] = tables[a].tables[b].abreiseValue4.match(/(\d+)/g);}else {
          this.parts[5] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue7) {
          this.parts[6] = tables[a].tables[b].abreiseValue7.match(/(\d+)/g);}else {
          this.parts[6] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue8) {
          this.parts[7] = tables[a].tables[b].abreiseValue8.match(/(\d+)/g);}else {
          this.parts[7] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue9) {
          this.parts[8] = tables[a].tables[b].abreiseValue9.match(/(\d+)/g);}else {
          this.parts[8] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue10) {
          this.parts[9] = tables[a].tables[b].abreiseValue10.match(/(\d+)/g);}else {
          this.parts[9] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue11) {
          this.parts[10] = tables[a].tables[b].abreiseValue11.match(/(\d+)/g);}else {
          this.parts[10] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue12) {
          this.parts[11] = tables[a].tables[b].abreiseValue12.match(/(\d+)/g);}else {
          this.parts[11] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue13) {
          this.parts[12] = tables[a].tables[b].abreiseValue13.match(/(\d+)/g);}else {
          this.parts[12] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue14) {
          this.parts[13] = tables[a].tables[b].abreiseValue14.match(/(\d+)/g);}else {
          this.parts[13] = "undefined";
        }
        if (tables[a].tables[b].abreiseValue15) {
          this.parts[14] = tables[a].tables[b].abreiseValue15.match(/(\d+)/g);}else {
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
        console.log('Parsed Date --->: ' + this.parsedDate[0]);
        console.log('this.dateGenerated --->: ' + dateToday);
        if (dateToday.indexOf(this.parsedDate[0] || this.parsedDate[1] || this.parsedDate[2] || this.parsedDate[3] || this.parsedDate[4] || this.parsedDate[5] || this.parsedDate[6] || this.parsedDate[7] || this.parsedDate[8] || this.parsedDate[9] || this.parsedDate[10] || this.parsedDate[11] || this.parsedDate[12] || this.parsedDate[13] || this.parsedDate[14] || this.parsedDate[15]) !== -1) {
            this.departmentsComponent.occupy(tables[a].tables[b], b);
          }
        }
      }
    }
*/
  umsetzen() {

      let targetTable = this.quellTisch.zielTisch;
      let quellTischNumber = this.quellTisch.quellTisch;
      let targetTableNumber = Number(this.quellTisch.zielTisch);
      let quellTischNumberNumber = Number(this.quellTisch.quellTisch);
      console.log('targetTable' + targetTable);
      console.log('quellTischNumber' + quellTischNumber);
      let tableToMove = {department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty"};
      let j = 0;

    if (Number(this.quellTisch.quellTisch) >= 40 && Number(this.quellTisch.quellTisch) <= 59) {
      tableToMove.department = "Sonnberg-Zirbn";
      j = 0;
    } else if (Number(this.quellTisch.quellTisch) >= 60 && Number(this.quellTisch.quellTisch) <= 89) {
      tableToMove.department = "Panorama";
      j = 1;
    } else if (Number(this.quellTisch.quellTisch) >= 1 && Number(this.quellTisch.quellTisch) <= 24) {
      tableToMove.department = "Restaurant";
      j = 3;
    } else if (Number(this.quellTisch.quellTisch) >= 501 && Number(this.quellTisch.quellTisch) <= 524) {
      tableToMove.department = "Wintergarten";
      j = 2;
    }

    if (Number(this.quellTisch.zielTisch) >= 40 && Number(this.quellTisch.zielTisch) <= 59) {
      tableToMove.targetDepartment = "Sonnberg-Zirbn";
    } else if (Number(this.quellTisch.zielTisch) >= 60 && Number(this.quellTisch.zielTisch) <= 89) {
      tableToMove.targetDepartment = "Panorama";
    } else if (Number(this.quellTisch.zielTisch) >= 1 && Number(this.quellTisch.zielTisch) <= 24) {
      tableToMove.targetDepartment = "Restaurant";
    } else if (Number(this.quellTisch.zielTisch) >= 501 && Number(this.quellTisch.zielTisch) <= 524) {
      tableToMove.targetDepartment = "Wintergarten";
    }

    let index = 0;
    tableToMove.number = quellTischNumber;
    tableToMove.targetTable = targetTable;
    console.log(tableToMove);
    this.tischplanService.getTables()
      .subscribe(tables => {

        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.department) {
              console.log("YEEEES BEFORE");
              if (tables[a].tables[b].number === tableToMove.number) {
                console.log("YEEEEEEEESSSSS AFFFTEEEER!!!");
                console.log(tables[a].tables[b]);
                this.tableInformation.push(tables[a].tables[b]);
                console.log(this.tableInformation);
                console.log('index: ' + index);
                this.tableInformation.push(tableToMove);
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.targetDepartment) {
              if (tables[a].tables[b].number === tableToMove.targetTable) {
                index = b;
              }
            }
          }
        }
        this.departmentsComponent.addInformationToTable(this.tableInformation, index);
        this.departmentsComponent.occupyTableOnDrop(tableToMove, index);
        //this.departmentsComponent.umsetzen(this.tableInformation, index);
      });
    this.departmentsComponent.occupy(tableToMove, j);
  }
}













