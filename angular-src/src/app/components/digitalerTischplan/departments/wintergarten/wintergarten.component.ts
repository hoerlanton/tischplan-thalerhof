import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TischplanService } from '../../../../services/tischplan.service';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-wintergarten',
  templateUrl: 'wintergarten.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class WintergartenComponent implements OnInit {

  @Input('tablesWintergarten') tablesWintergarten: Table[];
  @Input('showWintergartenBool') showWintergartenBool: boolean;
  @Input('term') term: string;

  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor(private tischplanService: TischplanService) { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

  getStyle(j) {
    if (j) {
      return "solid 3px red";
    } else {
      return "";
    }
  }
}
