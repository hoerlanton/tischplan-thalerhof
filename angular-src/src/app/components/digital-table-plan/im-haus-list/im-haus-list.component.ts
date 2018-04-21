import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { ImHausList } from '../../../../../ImHausList';

@Component({
  selector: 'app-im-haus-list',
  templateUrl: 'im-haus-list.component.html',
  styleUrls: ['../main.component.css']
})
export class ImHausListComponent implements OnInit {

  @Input('imHausListElemente') imHausListElemente: ImHausList[];
  dateTodayGenerated: any;
  parts: any[] = [];
  date: any;
  parsedDate: any;
  tomorrow: boolean;
  bgColorTomorrow: string;
  bgColorToday: string;

  constructor(private mainService: MainService) {
    this.tomorrow = false;
    this.bgColorTomorrow = "ffffff";
    this.bgColorToday = "ffffff";
  }

  ngOnInit() {
  }
  updateImHausListElement(informationElements2) {
    this.mainService.updateImHausListElement(informationElements2)
      .subscribe(response => {

        response.sort(function (a, b) {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        });

        //this.imHausListElemente = response;
        //console.log('updateImHausListElement response: ');
        //console.log(response);
        this.imHausListElemente = response;
        this.sortList();
      });
  }

  changeDayToToday(){
    this.tomorrow = null;
    this.bgColorTomorrow = "ffffff";
    this.bgColorToday = "0a7a74";
    }

  changeDayToTomorrow() {
    this.tomorrow = true;
    this.bgColorTomorrow = "0a7a74";
    this.bgColorToday = "ffffff";

  }

  mouseEnterChangeTodayButton() {
    //console.log("mouse enter : ");
    if (this.bgColorToday === "ffffff") {
      //console.log('mouse enter1 :');
      this.bgColorToday = "bdbdbd";
    }
    if (this.bgColorToday === "0a7a74") {
      //console.log('mouse enter1 :');
      this.bgColorToday = "05504c";
    }
  }

  mouseLeaveChangeTodayButton() {
    if (this.bgColorToday === "bdbdbd") {
      //console.log('mouse leave1 :');
      this.bgColorToday = "ffffff";
    }
    if (this.bgColorToday === "05504c") {
      //console.log('mouse enter1 :');
      this.bgColorToday = "0a7a74";
    }
  }

  mouseEnterChangeTomorrowButton() {
    //console.log("mouse enter : ");
    if (this.bgColorTomorrow === "ffffff") {
      //console.log('mouse enter1 :');
      this.bgColorTomorrow = "bdbdbd";
    }
    if (this.bgColorTomorrow === "0a7a74") {
      //console.log('mouse enter1 :');
      this.bgColorTomorrow = "05504c";
    }
  }

  mouseLeaveChangeTomorrowButton() {
    if (this.bgColorTomorrow === "bdbdbd") {
      //console.log('mouse leave1 :');
      this.bgColorTomorrow = "ffffff";
    }
    if (this.bgColorTomorrow === "05504c") {
      //console.log('mouse enter1 :');
      this.bgColorTomorrow = "0a7a74";
    }
  }

  sortList() {
    if (this.tomorrow) {
      this.dateTodayGenerated = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    } else {
      this.dateTodayGenerated = new Date();
    }
    //Date generated for tomorrow
    //new Date().getTime() + 24 * 60 * 60 * 1000
    let dateToday = String(this.dateTodayGenerated).substring(0, 15);
    //console.log("===========================ANREISEN===============================");
    //console.log(dateToday);
    for (let i = 0; i < this.imHausListElemente.length; i++) {
      this.imHausListElemente[i].isArrival = false;
      if (this.imHausListElemente[i].arrival) {
        this.parts = this.imHausListElemente[i].arrival.match(/(\d+)/g);
        //console.log(this.parts);
      }
      if (this.parts) {
        this.date = new Date(2018, this.parts[1] - 1, this.parts[0]);
        //console.log(this.date);
        this.parsedDate = String(this.date).substring(0, 15);
        //console.log(this.parsedDate);
      }
      if (dateToday.indexOf(this.parsedDate) !== -1) {
        this.imHausListElemente[i].isArrival = true;
      }
    }
  }
}
