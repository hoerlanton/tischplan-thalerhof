import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TischplanService } from '../../../../services/tischplan.service';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-panorama',
  templateUrl: 'panorama.component.html',
  styleUrls: ['../../tischplan.component.css']
})
export class PanoramaComponent implements OnInit {

  @Input('tablesPanorama') tablesPanorama: Table[];
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

}
