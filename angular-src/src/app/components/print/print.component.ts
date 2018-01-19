import { Component, OnInit} from '@angular/core';
import { TischplanComponent } from '../digitalerTischplan/tischplan.component';
import { SharedService } from '../sharedService';


@Component({
  selector: 'app-print',
  templateUrl: 'print.component.html',
  styleUrls: ['print.component.css']
})
export class PrintComponent implements OnInit {
  constructor( private sharedService: SharedService) {
    this.sharedService.caseNumber$.subscribe(
      data => {
        console.log('Sibling1Component-received from sibling2: ' + data);

        this.printToCart3(data);
      });
  }
  ngOnInit() {
  }

  printToCart3(data) {
    let popupWinindow;
    let innerContents = document.getElementById(data).innerHTML;
    popupWinindow = window.open('', '_blank', 'width=1000,height=1000,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWinindow.document.open();
    popupWinindow.document.write('<html><head><style></style></head><body onload="window.print()">' + innerContents + '</html>');
    popupWinindow.document.close();
}


}
