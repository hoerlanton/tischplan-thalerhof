import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notiz',
  templateUrl: 'notiz.component.html',
  styleUrls: ['../tischplan.component.css']
})
export class NotizComponent implements OnInit {
  @Input('notizElements') notizElements: any;
  @Input('showWintergartenBool') showWintergartenBool: boolean;
  @Input('showSonnbergZirbnBool') showSonnbergZirbnBool: boolean;
  @Input('showPanoramaBool') showPanoramaBool: boolean;
  @Input('showRestaurantBool') showRestaurantBool: boolean;
  @Input('showAlleBool') showAlleBool: boolean;
  constructor() { }

  ngOnInit() {
  }

}
