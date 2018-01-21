import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TischplanService } from '../../../../services/tischplan.service';
import { Table } from '../../../../../../Table';


@Component({
  selector: 'app-sonnberg-zirbn',
  templateUrl: 'sonnberg-zirbn.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class SonnbergZirbnComponent implements OnInit {

  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: Table[];
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: boolean;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

}
