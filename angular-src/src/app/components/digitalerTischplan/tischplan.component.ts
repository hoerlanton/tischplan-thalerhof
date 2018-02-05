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

  //item: any;
  subscription: Subscription;
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
  tempTablesArray2: any[] = [];
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
  tablesTempAbreise: any[] = [];
  abreiseTablePlusIndex: any;
  umsetzenInfoVar: any;
  showTablePlanBool: boolean;
  buttonBgColorShowTablePlan: string;
  fontColorShowTablePlan: string;
  newInformationEmployees: any[] = [];
  history: string[] = [];

  constructor(private tischplanService: TischplanService, private dragulaService: DragulaService) {

    //this.subscription = this._navService.navItem$
    //  .subscribe(tables => this.tablesPanorama = tables);


    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNotizForm = "0a7a74";
    this.buttonBgColorShowTablePlan= "0a7a74";
    this.fontColorInfoForm = "f3efe4";
    this.fontColorNotizForm = "f3efe4";
    this.fontColorShowTablePlan ="f3efe4";
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

    this.tischplanService.getInformationElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.newInformationElements = informationElemente;
          console.log(this.newInformationElements);
        }
      });

    this.tischplanService.getInformationEmployees()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {

          informationElemente.sort(function (a, b) {
            if (Number(a.numberOfTraces) < Number(b.numberOfTraces))
              return -1;
            if (Number(a.numberOfTraces) > Number(b.numberOfTraces))
              return 1;
            return 0;
          });

          let sorted = informationElemente.sort();

          this.newInformationEmployees = sorted;
          console.log(this.newInformationEmployees);
        }
      });

    this.tischplanService.getNotizElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.notizElements = informationElemente;
          console.log(this.notizElements);
        }
      });

      this.getTables();
      this.reloadLists();
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

  showWintergarten() {
    this.departmentmenuComponent.showWintergarten();
  }

  showRestaurant() {
    this.departmentmenuComponent.showRestaurant();
  }

  showSonnbergZirbn() {
    this.departmentmenuComponent.showWintergarten();
  }

  showPanorama() {
    this.departmentmenuComponent.showPanorama();
  }

  /*
  moveTable(table, j) {
    this.tableplanComponent.moveTable(table, j);
  }
  */
  sendInformation(event) {
    this.formComponent.sendInformation(event);
  }

  delete(informationElement, j, event) {
    this.navigationComponent.delete(informationElement, j, event);
  }

  changeBgColorIfAnreise(tables) {
    this.departmentsComponent.changeBgColorIfAnreise(tables);
  }

  abreisenRemoval() {
    this.departmentsComponent.occupy(this.abreiseTablePlusIndex.abreisenExport, this.abreiseTablePlusIndex.b);
  }
  umsetzen() {
    this.departmentsComponent.addInformationToTable(this.umsetzenInfoVar.tableInformationExport, this.umsetzenInfoVar.indexZiel);
    this.departmentsComponent.occupyTableOnDrop(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexZiel);

    setTimeout(() => {
      this.departmentsComponent.occupy(this.umsetzenInfoVar.tableToMove, this.umsetzenInfoVar.indexQuell);
    }, 2000);
  }
  reloadLists(){
    this.tischplanService.getImHausListe()
      .subscribe(imHausListeElemente => {
        if (imHausListeElemente === null) {
          return;
        } else {

          imHausListeElemente.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });

          this.imHausListeElemente = imHausListeElemente;
          console.log(this.imHausListeElemente);
        }
      });

    this.tischplanService.getAnreiseListe()
      .subscribe(anreiseListeElemente => {
        if (anreiseListeElemente === null) {
          return;
        } else {

          anreiseListeElemente.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });

          this.anreiseListeElemente = anreiseListeElemente;
          console.log(this.anreiseListeElemente);
        }
      });

    this.tischplanService.getTracesListe()
      .subscribe(tracesListeElemente => {
        if (tracesListeElemente === null) {
          return;
        } else {

          tracesListeElemente.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
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
  }

  updateAzList(){
    setTimeout(() => {
     this.getTables();
      setTimeout(() => {
        console.log('this.tablesWintergarten:');
        console.log(this.tablesWintergarten);
        this.tables = this.tablesWintergarten.concat(this.tablesRestaurant).concat(this.tablesPanorama).concat(this.tablesSonnbergZirbn);
        console.log('this.tables: in updateAzList');
        console.log(this.tables);
        this.printComponent.formatAzListe(this.tables);
      }, 3000);
    }, 1000);
  }

  getTables(){
    console.log('2222222222222222222222------------------------------');
    this.tischplanService.getTables()
      .subscribe(tables => {
        if (tables === null) {
          return;
        } else {
          console.log("TABLES LENGTH: " + tables.length);
          for (let a = 0; a < tables.length; a++) {
            tables[a].tables.sort(function (a, b) {
              if (Number(a.number) < Number(b.number))
                return -1;
              if (Number(a.number) > Number(b.number))
                return 1;
              return 0;
            });
          }

          let sortedTablesRestaurant = tables[3].tables.sort();
          console.log('sorted:');
          console.log(sortedTablesRestaurant);

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
          console.log(this.tablesPanorama);
          console.log(this.tablesWintergarten);
          console.log(this.tablesSonnbergZirbn);
          console.log(this.tablesRestaurant);
          this.changeBgColorIfAnreise(tables);
        }


        this.tablesTempAbreise = tables;
        this.tables = this.tablesWintergarten.concat(this.tablesRestaurant).concat(this.tablesPanorama).concat(this.tablesSonnbergZirbn);
        this.printComponent.formatAzListe(this.tables);

        console.log("this.tables");
        console.log(this.tables);
      });
  }
}




//this.departmentsComponent.occupy(tableToMove, j);









