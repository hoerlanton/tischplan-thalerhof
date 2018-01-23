import { Component, OnInit, Input } from '@angular/core';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-alle',
  templateUrl: 'alle.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class AlleComponent implements OnInit {

  @Input('tablesPanorama') tablesPanorama: Table[];
  @Input('tablesSonnbergZirbn') tablesSonnbergZirbn: Table[];
  @Input('tablesRestaurant') tablesRestaurant: Table[];
  @Input('tablesWintergarten') tablesWintergarten: Table[];
  @Input('term') term: string;

  constructor() {

  }

  ngOnInit() {
  }

}
