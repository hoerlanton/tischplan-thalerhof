import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Table } from '../../../../../Table';


@Component({
  selector: 'app-form',
  templateUrl: 'form.component.html',
  styleUrls: ['../main.component.css']
})
export class FormComponent implements OnInit {

  @Input('newInformationElements') newInformationElements: any[] = [];
  @Input('dateGenerated') dateGenerated: any;
  @Input('title') title: string;
  @Input('roomNumber') roomNumber: string;
  @Input('tableNumber') tableNumber: string;
  @Input('nameTraceInput') nameTraceInput: string;
  @Input('employee') employee: string;
  @Input('tablesBar') tablesBar: Table[];
  @Input('tablesWeinstube') tablesWeinstube: Table[];
  @Input('tablesSpeisesaal') tablesSpeisesaal: Table[];
  @Input('tablesTerasse') tablesTerasse: Table[];
  @Input('showInfoFormBool') showInfoFormBool: boolean;
  @Input('showNoteFormBool') showNoteFormBool: boolean;
  @Input('noteElements') noteElements: any;
  @Input('showSpeisesaalBool') showSpeisesaalBool: boolean;
  @Input('showTerasseBool') showTerasseBool: boolean;
  @Input('showWeinstubeBool') showWeinstubeBool: boolean;
  @Input('showBarBool') showBarBool: boolean;
  @Input('showAllBool') showAllBool: boolean;
  @Output()
  noteResponse:EventEmitter<any> = new EventEmitter();
  @Output()
  changeColorIfArrivalExport:EventEmitter<any> = new EventEmitter();
  parts: any[] = [];
  noteInput: string;
  departmentNoteInput: string;
  departments: any[] = [];
  employees: any[] = [];
  noteDate: any;

  constructor(private mainService: MainService, private _flashMessagesService: FlashMessagesService) {
    this.departments = ["Terasse", "Bar", "Speisesaal", "Weinstube"];
    this.employees = ["Test1", "Test2", "Test3", "Test4"];
  }

  ngOnInit() {
  }

  sendInformation(event) {
    event.preventDefault();
    this.dateGenerated = new Date();
    let newInformation = {
      text: this.title,
      roomNumber: this.roomNumber,
      tableNumber: this.tableNumber,
      date: this.dateGenerated,
      name: this.nameTraceInput,
      employee: this.employee
    };
    if (newInformation.text === undefined) {
      this._flashMessagesService.show('Die Nachricht ist leer ... ',
        {cssClass: 'alert-danger', timeout: 20000});
      return;
    } else {
      this._flashMessagesService.show('Erfolgreich Information gespeichert ... ',
        {cssClass: 'alert-success', timeout: 20000});
    }
    console.log(newInformation.tableNumber);

    if (newInformation.tableNumber) {
      this.mainService.sendInformation(newInformation)
        .subscribe(Information => {
          //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
          console.log('Information: ' + JSON.stringify(Information));
          //console.log(Information.tables[0]);
          console.log("------");
          //console.log(Information[0].tables);

          if (Information === null) {
            return;
          } else {
            if (Information.tables[0].department === "Terasse") {
              for (let i = 0; i < this.tablesTerasse.length; i++) {
                if (this.tablesTerasse[i].number === Information.tables[0].number) {
                  this.tablesTerasse[i] = Information.tables[0];
                }
              }
            } else if (Information.tables[0].department === "Weinstube") {
              for (let i = 0; i < this.tablesWeinstube.length; i++) {
                if (this.tablesWeinstube[i].number === Information.tables[0].number) {
                  this.tablesWeinstube[i] = Information.tables[0];
                }
              }
            } else if (Information.tables[0].department === "Bar") {
              for (let i = 0; i < this.tablesBar.length; i++) {
                if (this.tablesBar[i].number === Information.tables[0].number) {
                  this.tablesBar[i] = Information.tables[0];
                }
              }
            } else if (Information.tables[0].department === "Speisesaal") {
              for (let i = 0; i < this.tablesSpeisesaal.length; i++) {
                if (this.tablesSpeisesaal[i].number === Information.tables[0].number) {
                  this.tablesSpeisesaal[i] = Information.tables[0];
                }
              }
            }
          }
        });
      this.changeColorIfArrivalExport.emit();
    }
    this.mainService.sendInformationToBox(newInformation)
      .subscribe(Information => {
        //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
        console.log('Information: ' + JSON.stringify(Information));
        //console.log(Information.tables[0]);
        //console.log("------");
        //console.log(Information[0].tables);
        this.newInformationElements.push(Information);
        console.log('this.newInformationElements' + this.newInformationElements);
      });
  }

  sendNote(event) {
    event.preventDefault();

    this.noteDate = String(new Date()).substring(0, 15);

    console.log(this.noteDate);

    let newNote = {
      noteInput: this.noteInput,
      departmentNoteInput: this.departmentNoteInput,
      date: this.noteDate
    };
    if (newNote.noteInput === undefined) {
      this._flashMessagesService.show('Die Nachricht ist leer ... ',
        {cssClass: 'alert-danger', timeout: 20000});
      return;
    } else {
      this._flashMessagesService.show('Erfolgreich Information gespeichert ... ',
        {cssClass: 'alert-success', timeout: 20000});
    }
    this.mainService.sendInformationToNoteBlock(newNote)
      .subscribe(Note => {
        //console.log('Information: ' + JSON.stringify(Information.tables[0].tableNumber));
        console.log('Information: ' + JSON.stringify(Note));
        //console.log(Information.tables[0]);
        //console.log("------");
        //console.log(Information[0].tables);
        this.noteResponse.emit(Note);
        this.noteElements = Note;
        console.log(this.noteElements);
        //console.log('this.newInformationElements' + this.newInformationElements);
      });
  }
}
