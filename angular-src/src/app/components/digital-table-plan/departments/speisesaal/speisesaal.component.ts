import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MainService } from '../../../../services/main.service';
import { Table } from '../../../../../../Table';

@Component({
  selector: 'app-speisesaal',
  templateUrl: 'speisesaal.component.html',
  styleUrls: ['../../main.component.css']
})
export class SpeisesaalComponent implements OnInit {

  @Input('tablesSpeisesaal') tablesSpeisesaal: Table[];
  @Input('showSpeisesaalBool') showSpeisesaalBool: boolean;
  @Input('term') term: string;

  @Output()
  occupied:EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  occupy(table, j) {
    this.occupied.emit({table, j});
  }

  getStyle(j) {
    if (j != "-") {
      return "solid 3px red";
    } else {
      return "";
    }
  }

  transform(tables: Array<any>, term: any) {
    console.log("term");
    console.log(term);
    if (term == "") {
      this.tablesSpeisesaal = tables;
    } else {
      if (Array.isArray(tables) && tables.length && term && term.length) {
        this.tablesSpeisesaal = tables.filter(item => {
          console.log(item);
          let keys = Object.keys(item);
          if (item.groups) {
            let keysGroups = Object.keys(item.groups);
            console.log(keys);
            console.log(keysGroups);
            console.log();
            if (Array.isArray(keys) && keys.length) {
              for (let key of keys) {
                if (item.hasOwnProperty(key) && item[key] && item[key].length && (item[key].toString().toLowerCase().replace(/ /g, '')).includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                  return true;
                } else if (item.groups) {
                  for (let keyGroups of keysGroups) {
                    let keysGroupsGroups = Object.keys(item.groups[keyGroups]);
                    for (let keyGroupsGroups of keysGroupsGroups) {
                      if (item.groups[keyGroups][keyGroupsGroups]) {
                        if (item.groups[keyGroups][keyGroupsGroups].toString().toLowerCase().replace(/ /g, '').includes((term.toString().toLowerCase().replace(/ /g, '')))) {
                          return true;
                        }
                      }
                    }
                  }
                }
              }
              return false;
            } else {
              return false;
            }
          }
        });
      } else {
        return tables;
      }
    }
  }
}
