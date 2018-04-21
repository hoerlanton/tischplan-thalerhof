import { Component, ViewChild} from '@angular/core';
import { MainService } from '../../services/main.service';
import { DragulaService } from "ng2-dragula";
import { ImHausList } from '../../../../ImHausList';
import { Table } from '../../../../Table';
import { PrintComponent }  from './print/print.component';
import { DepartmentmenuComponent }  from './departmentmenu/departmentmenu.component';
import { FormComponent }  from './form/form.component';
import { ImHausListComponent } from './im-haus-list/im-haus-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableplanComponent } from './tableplan/tableplan.component';
import { DepartmentsComponent } from './departments/departments.component';

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css']
})

export class MainComponent {
  @ViewChild(PrintComponent)
  private printComponent: PrintComponent;
  @ViewChild(DepartmentmenuComponent)
  private departmentmenuComponent: DepartmentmenuComponent;
  @ViewChild(FormComponent)
  private formComponent: FormComponent;
  @ViewChild(DepartmentsComponent)
  private departmentsComponent: DepartmentsComponent;
  @ViewChild(ImHausListComponent)
  private imHausListComponent: ImHausListComponent;
  @ViewChild(NavigationComponent)
  private navigationComponent: NavigationComponent;
  @ViewChild(TableplanComponent)
  private tableplanComponent: TableplanComponent;

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
  buttonBgColorNoteForm: string;
  fontColorInfoForm: string;
  fontColorNoteForm: string;
  showNoteFormBool: boolean;
  showAllBool: boolean;
  topValues: any[] = [];
  imHausListElemente: ImHausList[];
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
  noteElements: any[] = [];
  term: string;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  tableInformation: any[] = [];
  tablesTempDeparture: any[] = [];
  departureTablePlusIndex: any;
  reseatInfoVar: any;
  showTablePlanBool: boolean;
  buttonBgColorShowTablePlan: string;
  fontColorShowTablePlan: string;
  newInformationEmployees: any[] = [];
  history: string[] = [];
  adultSonnbergZirbn: any[] = [];
  childSonnbergZirbn: any[] = [];
  adultPanorama: any[] = [];
  childPanorama: any[] = [];
  adultRestaurant: any[] = [];
  childRestaurant: any[] = [];
  adultWintergarten: any[] = [];
  childWintergarten: any[] = [];

  constructor(private mainService: MainService, private dragulaService: DragulaService) {

    this.buttonBgColorInfoForm = "0a7a74";
    this.buttonBgColorNoteForm = "0a7a74";
    this.buttonBgColorShowTablePlan = "0a7a74";
    this.fontColorInfoForm = "f3efe4";
    this.fontColorNoteForm = "f3efe4";
    this.fontColorShowTablePlan = "f3efe4";
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
    this.showAllBool = false;
    this.term = "";

    this.mainService.getInformationElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.newInformationElements = informationElemente;
          console.log(this.newInformationElements);
        }
      });

    this.mainService.getInformationEmployees()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {

          informationElemente.sort((a,b) => 0 - (a.numberOfTraces > b.numberOfTraces ? 1 : -1));


          this.newInformationEmployees = informationElemente;
          console.log(this.newInformationEmployees);
        }
      });

    this.mainService.getNoteElements()
      .subscribe(informationElemente => {
        if (informationElemente === null) {
          return;
        } else {
          this.noteElements = informationElemente;
          console.log(this.noteElements);
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
    this.updateImHausListElement(informationElements2);
    this.tableplanComponent.sumUpNumberOfPersons();
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

  transform(term){
    this.departmentsComponent.transform(term);
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

  sendInformation(event) {
    this.formComponent.sendInformation(event);
  }

  delete(informationElement, j, event) {
    this.navigationComponent.delete(informationElement, j, event);
  }

  changeBgColorIfArrival() {
    this.departmentsComponent.changeBgColorIfArrival();
  }

  departureRemoval() {
    this.departmentsComponent.occupy(this.departureTablePlusIndex.departureExport, this.departureTablePlusIndex.b);
  }

  updateImHausListElement(x) {
    this.imHausListComponent.updateImHausListElement(x);
  }

  reseat() {
    this.departmentsComponent.addInformationToTable(this.reseatInfoVar.tableInformationExport, this.reseatInfoVar.indexTarget);
    this.departmentsComponent.occupyTableOnDrop(this.reseatInfoVar.tableToMove, this.reseatInfoVar.indexTarget);

    setTimeout(() => {
      this.departmentsComponent.occupy(this.reseatInfoVar.tableToMove, this.reseatInfoVar.indexSource);
    }, 2000);
  }

  reloadLists() {
    this.mainService.getImHausList()
      .subscribe(imHausListElemente => {
        if (imHausListElemente === null) {
          return;
        } else {

          imHausListElemente.sort(function (a, b) {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          });

          this.imHausListElemente = imHausListElemente;
          console.log(this.imHausListElemente);

          setTimeout(() => {
            this.imHausListComponent.sortList();
          }, 3000);
        }
      });

  }

  updateAzList() {
    setTimeout(() => {
      this.getTables();
      setTimeout(() => {
        //console.log('this.tablesWintergarten:');
        //console.log(this.tablesWintergarten);
        this.tables = this.tablesWintergarten.concat(this.tablesRestaurant).concat(this.tablesPanorama).concat(this.tablesSonnbergZirbn);
        //console.log('this.tables: in updateAzList');
        //console.log(this.tables);
        this.printComponent.formatAzList(this.tables);
      }, 3000);
    }, 1000);
  }

  getTables() {
    console.log('getTables called');
    this.mainService.getTables()
      .subscribe(tables => {
        if (tables === null) {
          return;
        } else {
          //console.log("tables[3].tables");
          //console.log(JSON.parse(tables[3].tables));
          for (let x = 0; x < tables.length; x++){
            //console.log("tables[x].department");
            //console.log(tables[x].department);
            if (tables[x].department === "Restaurant") {
              tables[x].tables.sort(function (a, b) {
                //console.log(a.number);
                //console.log(b.number);
                if (Number(a.number) < Number(b.number))
                  return -1;
                if (Number(a.number) > Number(b.number))
                  return 1;
                return 0;
              });
            }
          }
          for (let a = 0; a < tables.length; a++) {
            if (tables[a].department === "Panorama") {
              this.tablesPanorama = tables[a].tables;
            }
            else if (tables[a].department === "Wintergarten") {
              this.tablesWintergarten = tables[a].tables;
              //console.log('Test' + JSON.stringify(this.tablesWintergarten));
            }
            else if (tables[a].department === "Sonnberg-Zirbn") {
              this.tablesSonnbergZirbn = tables[a].tables;
            }
            else if (tables[a].department === "Restaurant") {
              this.tablesRestaurant = tables[a].tables;
            }
          }
          this.changeBgColorIfArrival();
        }
        this.tablesTempDeparture = tables;
        this.tables = this.tablesWintergarten.concat(this.tablesRestaurant).concat(this.tablesPanorama).concat(this.tablesSonnbergZirbn);
        this.printComponent.formatAzList(this.tables);
        setTimeout(() => {
          this.tableplanComponent.sumUpNumberOfPersons();
        }, 1000);
      });
  }
}
