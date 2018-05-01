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
    popupWinindow.document.write('<html><head><style> .row .t201 { position: absolute; } .row .t202 { position: absolute; } .row .t204 { position: absolute; } .row .t244 { position: absolute; } .row .t118 { position: absolute; } .row .t103 { position: absolute; } .row .t130 { position: absolute; } .row .t131 { position: absolute; } .row .t132 { position: absolute; } .row .t133 { position: absolute; } .row .t134 { position: absolute; } .row .t135 { position: absolute; } .row .t136 { position: absolute; } .row .t137 { position: absolute; } .row .t138 { position: absolute; } .row .t104 { position: absolute; } .row .t105 { position: absolute; } .row .t106 { position: absolute; } .row .t107 { position: absolute; } .row .t108 { position: absolute; } .row .t109 { position: absolute; } .row .t110 { position: absolute; } .row .t111 { position: absolute; } .row .t112 { position: absolute; } .row .t113 { position: absolute; } .row .t114 { position: absolute; } .row .t115 { position: absolute; } .row .t116 { position: absolute; } .row .t117 { position: absolute; } .row .t118 { position: absolute; } .row .t119 { position: absolute; } .row .t129 { position: absolute; }  .row .t121 { position: absolute; }  .row .t203 { position: absolute; }</style></head><body onload="window.print()">' + innerContents + '</html>');
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

    if (Number(this.sourceTable) >= 0 && Number(this.sourceTable) <= 0) {
      tableToMove.department = "Terasse";
      j = 0;
    } else if ((Number(this.sourceTable) >= 201 && Number(this.sourceTable) <= 205) || Number(this.sourceTable) == 244 || Number(this.sourceTable) == 118)  {
      tableToMove.department = "Weinstube";
      j = 1;
    } else if ((Number(this.sourceTable) >= 130 && Number(this.sourceTable) <= 138) || Number(this.sourceTable) == 103) {
      tableToMove.department = "Bar";
      j = 3;
    } else if ((Number(this.sourceTable) >= 107 && Number(this.sourceTable) <= 130) && Number(this.sourceTable) != 118) {
      tableToMove.department = "Speisesaal";
      j = 2;
    }

    if (Number(this.targetTable) >= 0 && Number(this.targetTable) <= 0) {
      tableToMove.targetDepartment = "Terasse";
    } else if ((Number(this.targetTable) >= 201 && Number(this.targetTable) <= 205) || Number(this.targetTable) == 244 || Number(this.targetTable) == 118)  {
      tableToMove.targetDepartment = "Weinstube";
    } else if ((Number(this.targetTable) >= 130 && Number(this.targetTable) <= 138) || Number(this.targetTable) == 103) {
      tableToMove.targetDepartment = "Bar";
    } else if ((Number(this.targetTable) >= 107 && Number(this.targetTable) <= 130) && Number(this.targetTable) != 118) {
      tableToMove.targetDepartment = "Speisesaal";
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
