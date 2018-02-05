import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from '../../../../../Table';
import { TischplanService } from '../../../services/tischplan.service';
import { NavService }   from '../../../services/tables.service';

@Component({
  selector: 'app-tableplan',
  templateUrl: 'tableplan.component.html',
  styleUrls: ['../tischplan.component.css']
})

export class TableplanComponent implements OnInit {
  @Input('tablesWintergarten') tablesWintergarten: Table[];
  @Input('showWintergartenBool') showWintergartenBool: boolean;
  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: Table[];
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: boolean;
  @Input('tablesPanorama') tablesPanorama: Table[];
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Input('tablesRestaurant') tablesRestaurant: Table[];
  @Input('showRestaurantBool') showRestaurantBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  @Input('showTablePlanBool') showTablePlanBool: boolean;
  @Output()
  movedSonnbergZirbn:EventEmitter<any> = new EventEmitter();
  @Output()
  movedRestaurant:EventEmitter<any> = new EventEmitter();
  @Output()
  movedWintergarten:EventEmitter<any> = new EventEmitter();
  @Output()
  movedPanorama:EventEmitter<any> = new EventEmitter();

  constructor(private tischplanService: TischplanService, private _navService:NavService) { }

  ngOnInit() {
  }

  addTable(table, j) {
    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.addTable(table).subscribe(response => {

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
    });
  }

  removeTable(table, j) {
    console.log("moveTable clicked");
    console.log('table :' + table.number + 'j' + j);
    this.tischplanService.removeTable(table).subscribe(response => {

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
    });
  }

  getStyle(j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y) {
    if (j || k || l || m || n || o || p || q || r || s || t || u || v || w || x || y) {
      return "solid 3px red";
    } else {
      return "solid 3px rgb(243, 239, 228)";
    }
  }

  none(event) {
    event.stopPropagation();
  }
}
