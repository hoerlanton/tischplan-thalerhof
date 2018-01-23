import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css']
})
export class SearchComponent {
  term: string;
  @Output()
  termExport:EventEmitter<any> = new EventEmitter();

constructor() {

}

  keyDownFunction(event) {
    if(event.keyCode == 13) {
      //alert('you just clicked enter');
      this.termExport.emit(this.term);
    }
  }

  ngOnInit() {

  }

}


