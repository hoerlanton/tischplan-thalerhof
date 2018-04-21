import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Http } from '@angular/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.css']
})

export class NavigationComponent implements OnInit {

  filesToUpload: Array<File> = [];
  @Input('newInformationElements') newInformationElements: any[] = [];
  @Input('newInformationEmployees') newInformationEmployees: any[] = [];
  @Input('tablesOccupied') tablesOccupied: number;
  @Input('tablesTempDeparture') tablesTempDeparture: any[] = [];
  @Output()
  reseatExport: EventEmitter<any> = new EventEmitter();
  @Output()
  departureExportExport: EventEmitter<any> = new EventEmitter();
  term: string;
  @Output()
  termExport: EventEmitter<any> = new EventEmitter();
  @Output()
  getTablesExport: EventEmitter<any> = new EventEmitter();
  @Output()
  reloadLists: EventEmitter<any> = new EventEmitter();
  @Output()
  transformExport: EventEmitter<any> = new EventEmitter();
  dateTodayGenerated: any;
  date: any[] = [];
  parts: any[] = [];
  parsedDate: any[] = [];
  sourceTable: any;
  targetTable: any;
  tableInformation: any[] = [];
  printToCart1Button: string;
  printToCart2Button: string;
  printToCart3Button: string;
  departureAbortButton: string;
  departureExecuteButton: string;
  departureExecuteTomorrowButton: string;


  constructor(private mainService: MainService, private http: Http, private _flashMessagesService: FlashMessagesService, public authService: AuthService, private router: Router ) {
    this.printToCart1Button = "ffffff";
    this.printToCart2Button = "ffffff";
    this.printToCart3Button = "ffffff";
    this.departureAbortButton = "ffffff";
    this.departureExecuteButton = "ff0000";
    this.departureExecuteTomorrowButton = "ff0000";
  }

  ngOnInit() {
  }

  delete(informationElement, j, event) {
    console.log(informationElement);
    console.log(j);

    event.stopPropagation();

    this.mainService.deleteInformationElement(informationElement)
      .subscribe(informationElement => {
        this.newInformationElements.splice(j, 1);
      });
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

  printToCart2(printSectionId2: string) {
    let popupWinindow;
    let innerContents = document.getElementById(printSectionId2).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style> .row .t1 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t2 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t3 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t4 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t5 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t6 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t7 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t8 { width: 100px; height: 90px; border: solid 1px #0a7a74; position: absolute; } .row .t9 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t10 { width: 40px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t11 { width: 30px; height: 80px; border: solid 1px #0a7a74; position: absolute; } .row .t12 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t13 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t14 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t15 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t16 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t17 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t18 { position: absolute; } .row .t19 { position: absolute; }.row .t20 { position: absolute; } .row .t21 { position: absolute; }  .row .t22 { position: absolute; } .row .t23 { position: absolute; } .row .t24 { position: absolute; } .row .t40 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t41 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t42 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t43 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t44 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t45 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t46 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t47 { width: 80px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t48 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t49 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t50 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t51 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t52 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t53 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t54 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t55 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t56 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t57 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t58 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t59 { width: 60px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t60 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t61 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t62 { width: 30px; height: 60px; position: absolute; border: solid 1px #0a7a74; } .row .t63 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t64 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t65 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t66 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; } .row .t67 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t68 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t69 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t70 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t71 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t72 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t73 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t74 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t75 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t76 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t77 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t78 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t79 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t80 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t81 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t82 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t83 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t84 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t85 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t86 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t87 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t88 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t89 { width: 60px; height: 30px; border: solid 1px #0a7a74; position: absolute; } .row .t501 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t502 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; } .row .t503 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t504 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t505 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t506 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t507 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t508 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t509 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t510 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t511 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t512 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t513 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t514 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; border-radius: 50%; } .row .t515 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t516 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t517 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(10deg); } .row .t518 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(30deg); } .row .t519 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(50deg); } .row .t520 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(70deg); } .row .t521 { width: 30px; height: 60px; border: solid 1px #0a7a74; position: absolute; transform: rotate(90deg); } .row .t522 { width: 80px; height: 45px; border: solid 1px #0a7a74; position: absolute; } .row .t523 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t524 { width: 40px; height: 40px; border: solid 1px #0a7a74; position: absolute; transform: rotate(45deg); } .row .t525 { width: 40px; height: 40px; position: absolute; transform: rotate(45deg); } </style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  printToCart3(data) {
    console.log('This method is calld from the parent component via ViewChild');
    let popupWinindow;
    let innerContents = document.getElementById(data).innerHTML;
    console.log(innerContents);
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
  }

  none(event) {
    event.stopPropagation();
  }

  brandClick() {
    window.location.reload()
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append('uploads[]', files[0], files[0]['name']);

    this.http.post('/upload', formData)
      .map(files => files.json()).map(res => {
      // 1st parameter is a flash message text
      // 2nd parameter is optional. You can pass object with options.
    if (res[0].originalname) {
      this._flashMessagesService.show('Erfolgreich ' + JSON.stringify(res[0].originalname) + " hochgeladen", {
        cssClass: 'alert-success',
        timeout: 10000
      })} else {
      this._flashMessagesService.show(JSON.stringify(res), {
        cssClass: 'alert-danger',
        timeout: 10000
      })
    }})

  .subscribe(files => console.log("files", files));
    setTimeout(() => {
      this.reloadLists.emit();
    }, 3000);
  }


  dispenseIfDepartureToday() {
    this.dateTodayGenerated = new Date(); //Today
    this.dispenseIfDeparture();
  }

  dispenseIfDepartureTomorrow() {
    console.log("dispenseIfDepartureTomorrow");
    this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000); //Tomorrow
    this.dispenseIfDeparture();
    console.log(this.dateTodayGenerated);
  }


  dispenseIfDeparture() {
    let tables = this.tablesTempDeparture;
    let departureExport = [];
    let b = 0;
    console.log('dispenseIfDeparture');
    //Tomorrow new Date().getTime() + 24 * 60 * 60 * 1000
    for (let a = 0; a < tables.length; a++) {
      for (let b = 0; b < tables[a].tables.length; b++) {
        if (tables[a].tables[b].groups) {
          let departureExportObject = {
            table: tables[a].tables[b],
            group: [],
            date: String(this.dateTodayGenerated).substring(0, 15)
          };
          for (let c = 0; c < tables[a].tables[b].groups.length; c++) {
            if (tables[a].tables[b].groups[c].departureValue) {
              this.parts[0] = tables[a].tables[b].groups[c].departureValue.match(/(\d+)/g);
            } else {
              this.parts[0] = "undefined";
            }
            if (this.parts[0]) {
              this.date[0] = new Date(2018, this.parts[0][1] - 1, this.parts[0][0]);
              this.parsedDate[0] = String(this.date[0]).substring(0, 15);
            }
            let dateToday = String(this.dateTodayGenerated).substring(0, 15);
            if (dateToday.indexOf(this.parsedDate[0]) !== -1 || tables[a].tables[b].groups[c].newTraceText) {
              departureExportObject.group.push(c);
            }
            if(c === (tables[a].tables[b].groups.length -1) && (typeof departureExportObject.group !== 'undefined' && departureExportObject.group.length > 0)) {
              console.log("EEEEMMMMMMIIIIIIITTT");
              departureExport.push(departureExportObject);
            }
          }
        }
      }
    }
    console.log(departureExport);
    setTimeout(() => {
      this.departureExportExport.emit({departureExport, b});
    }, 100);
    this.getTablesExport.emit();
  }

  reseat() {

    event.preventDefault();
    console.log("UMSETZTEN CALLED");
    let sourceTable = this.sourceTable;
    let targetTable = this.targetTable;
    this.tableInformation = [];


    //let targetTable = this.sourceTable;
    //let sourceTableNumber = this.sourceTable;
    //let targetTableNumber = Number(this.sourceTable.targetTable);
    //let sourceTableNumberNumber = Number(this.sourceTable.sourceTable);
    console.log('targetTable' + targetTable);
    console.log('sourceTableNumber' + sourceTable);
    let tableToMove = {department: "Empty", number: "0", targetTable: "0", targetDepartment: "Empty"};
    let j = 0;

    if (Number(this.sourceTable) >= 40 && Number(this.sourceTable) <= 59) {
      tableToMove.department = "Sonnberg-Zirbn";
      j = 0;
    } else if (Number(this.sourceTable) >= 60 && Number(this.sourceTable) <= 89) {
      tableToMove.department = "Panorama";
      j = 1;
    } else if (Number(this.sourceTable) >= 1 && Number(this.sourceTable) <= 24) {
      tableToMove.department = "Restaurant";
      j = 3;
    } else if (Number(this.sourceTable) >= 501 && Number(this.sourceTable) <= 524) {
      tableToMove.department = "Wintergarten";
      j = 2;
    }

    if (Number(this.targetTable) >= 40 && Number(this.targetTable) <= 59) {
      tableToMove.targetDepartment = "Sonnberg-Zirbn";
    } else if (Number(this.targetTable) >= 60 && Number(this.targetTable) <= 89) {
      tableToMove.targetDepartment = "Panorama";
    } else if (Number(this.targetTable) >= 1 && Number(this.targetTable) <= 24) {
      tableToMove.targetDepartment = "Restaurant";
    } else if (Number(this.targetTable) >= 501 && Number(this.targetTable) <= 524) {
      tableToMove.targetDepartment = "Wintergarten";
    }

    let indexTarget = 0;
    let indexSource = 0;

    tableToMove.number = this.sourceTable;
    tableToMove.targetTable = this.targetTable;
    console.log(tableToMove);
    this.mainService.getTables()
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
                this.tableInformation.push(tableToMove);
                console.log(this.tableInformation);
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.targetDepartment) {
              if (tables[a].tables[b].number === tableToMove.targetTable) {
                indexTarget = b;
              }
            }
          }
        }
        for (let a = 0; a < tables.length; a++) {
          for (let b = 0; b < tables[a].tables.length; b++) {
            if (tables[a].department === tableToMove.department) {
              if (tables[a].tables[b].number === tableToMove.number) {
                indexSource = b;
              }
            }
          }
        }
        console.log("this.tableInformation IIIIIIIII");
        let tableInformationExport = this.tableInformation;
        this.reseatExport.emit({tableToMove, indexTarget, indexSource, tableInformationExport});
      });
  }

  keyDownFunction(event) {
    if (event.keyCode == 13) {
      //alert('you just clicked enter');
      this.termExport.emit(this.term);
    }
  }

  onKey(event: any) { // without type in
    this.term = event.target.value;
    console.log(this.term);
    this.termExport.emit(this.term);
    this.transformExport.emit(this.term);
  }

  onLogoutClick() {
    this.authService.logout();
    //this._flashMessagesService.show('You are logged out', {
    //  cssClass: 'alert-success',
    //  timeout: 3000
    //});
    this.router.navigate(['/login']);
    return false;
  }

  mouseEnterprintToCart1Button() {
    //console.log("mouse enter : ");
    if (this.printToCart1Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart1Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart1Button() {
    if (this.printToCart1Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart1Button = "ffffff";
    }
  }

  mouseEnterprintToCart2Button() {
    //console.log("mouse enter : ");
    if (this.printToCart2Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart2Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart2Button() {
    if (this.printToCart2Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart2Button = "ffffff";
    }
  }

  mouseEnterprintToCart3Button() {
    //console.log("mouse enter : ");
    if (this.printToCart3Button === "ffffff") {
      //console.log('mouse enter1 :');
      this.printToCart3Button = "cfcfcf";
    }
  }

  mouseLeaveprintToCart3Button() {
    if (this.printToCart3Button === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.printToCart3Button = "ffffff";
    }
  }

  mouseEnterDepartureExecuteButton() {
    //console.log("mouse enter : ");
    if (this.departureExecuteButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.departureExecuteButton = "a00000";
    }
  }

  mouseLeaveDepartureExecuteButton() {
    if (this.departureExecuteButton === "a00000") {
      //console.log('mouse leave1 :');
      this.departureExecuteButton = "ff0000";
    }
  }

  mouseEnterDepartureTomorrowExecuteButton() {
    //console.log("mouse enter : ");
    if (this.departureExecuteTomorrowButton === "ff0000") {
      //console.log('mouse enter1 :');
      this.departureExecuteTomorrowButton = "a00000";
    }
  }

  mouseLeaveDepartureTomorrowExecuteButton() {
    if (this.departureExecuteTomorrowButton === "a00000") {
      //console.log('mouse leave1 :');
      this.departureExecuteTomorrowButton = "ff0000";
    }
  }

  mouseEnterDepartureAbortButton() {
    //console.log("mouse enter : ");
    if (this.departureAbortButton === "ffffff") {
      //console.log('mouse enter1 :');
      this.departureAbortButton = "cfcfcf";
    }
  }

  mouseLeaveDepartureAbortButton() {
    if (this.departureAbortButton === "cfcfcf") {
      //console.log('mouse leave1 :');
      this.departureAbortButton = "ffffff";
    }
  }
}
