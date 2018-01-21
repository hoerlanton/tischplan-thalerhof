import {Component, OnInit, Input, ViewChild, AfterViewInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-departmentmenu',
  templateUrl: 'departmentmenu.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class DepartmentmenuComponent implements AfterViewInit {

  @Input('buttonBgColor1') buttonBgColor1: string;
  @Input('buttonBgColor2') buttonBgColor2: string;
  @Input('buttonBgColor3') buttonBgColor3: string;
  @Input('buttonBgColor4') buttonBgColor4: string;
  @Input('fontColor1') fontColor1: string;
  @Input('fontColor2') fontColor2: string;
  @Input('fontColor3') fontColor3: string;
  @Input('fontColor4') fontColor4: string;
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Input('showRestaurantBool') showRestaurantBool: boolean;
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: boolean;
  @Input('showWintergartenBool') showWintergartenBool: boolean;
  @Output() showSonnbergZirbnBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showPanoramaBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showRestaurantBoolChange: EventEmitter<boolean> = new EventEmitter();
  @Output() showWintergartenBoolChange: EventEmitter<boolean> = new EventEmitter();
  constructor() {  }

  ngOnInit() {
  }

  ngAfterViewInit() {
  }
    showSonnbergZirbn() {
      console.log("showSonnbergZirbn!");

      this.showSonnbergZirbnBool = true;
      this.showPanoramaBool = false;
      this.showRestaurantBool = false;
      this.showWintergartenBool = false;

      if (this.buttonBgColor1 === "0a7a74") {
        this.buttonBgColor1 = "f3efe4";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74"
      } else {
        this.buttonBgColor1 = "0a7a74";
      }
      if (this.fontColor1 === "f3efe4") {
        this.fontColor1 = "0a7a74";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4"
      } else {
        this.fontColor1 = "f3efe4";
      }
      this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
      this.showRestaurantBoolChange.emit(this.showRestaurantBool);
      this.showPanoramaBoolChange.emit(this.showPanoramaBool);
      this.showWintergartenBoolChange.emit(this.showWintergartenBool);

    }

    showPanorama() {
      console.log("showPanorama!");
      this.showSonnbergZirbnBool = false;
      this.showPanoramaBool = true;
      console.log(this.showPanoramaBool);
      this.showRestaurantBool = false;
      this.showWintergartenBool = false;

      if (this.buttonBgColor2 === "0a7a74") {
        this.buttonBgColor2 = "f3efe4";
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor3 = "0a7a74";
        this.buttonBgColor4 = "0a7a74"
      } else {
        this.buttonBgColor2 = "0a7a74";
      }
      if (this.fontColor2 === "f3efe4") {
        this.fontColor2 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor3 = "f3efe4";
        this.fontColor4 = "f3efe4"
      } else {
        this.fontColor2 = "f3efe4";
      }
      this.showPanoramaBoolChange.emit(this.showPanoramaBool);
      this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
      this.showRestaurantBoolChange.emit(this.showRestaurantBool);
      this.showWintergartenBoolChange.emit(this.showWintergartenBool);

    }

    showRestaurant() {
      console.log("showRestaurant!");
      this.showSonnbergZirbnBool = false;
      this.showPanoramaBool = false;
      this.showRestaurantBool = true;
      this.showWintergartenBool = false;

      if (this.buttonBgColor3 === "0a7a74") {
        this.buttonBgColor3 = "f3efe4";
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor4 = "0a7a74"
      } else {
        this.buttonBgColor3 = "0a7a74";
      }
      if (this.fontColor3 === "f3efe4") {
        this.fontColor3 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor4 = "f3efe4"
      } else {
        this.fontColor3 = "f3efe4";
      }
      this.showRestaurantBoolChange.emit(this.showRestaurantBool);
      this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
      this.showPanoramaBoolChange.emit(this.showPanoramaBool);
      this.showWintergartenBoolChange.emit(this.showWintergartenBool);
    }

    showWintergarten() {
      console.log("showWintergarten!");
      this.showSonnbergZirbnBool = false;
      this.showPanoramaBool = false;
      this.showRestaurantBool = false;
      this.showWintergartenBool = true;

      if (this.buttonBgColor4 === "0a7a74") {
        this.buttonBgColor4 = "f3efe4";
        this.buttonBgColor1 = "0a7a74";
        this.buttonBgColor2 = "0a7a74";
        this.buttonBgColor3 = "0a7a74"
      } else {
        this.buttonBgColor4 = "0a7a74";
      }
      if (this.fontColor4 === "f3efe4") {
        this.fontColor4 = "0a7a74";
        this.fontColor1 = "f3efe4";
        this.fontColor2 = "f3efe4";
        this.fontColor3 = "f3efe4"
      } else {
        this.fontColor4 = "f3efe4";
      }
      this.showWintergartenBoolChange.emit(this.showWintergartenBool);
      this.showSonnbergZirbnBoolChange.emit(this.showSonnbergZirbnBool);
      this.showRestaurantBoolChange.emit(this.showRestaurantBool);
      this.showPanoramaBoolChange.emit(this.showPanoramaBool);
    }

}


