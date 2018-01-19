import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';


@Injectable()
export class SharedService {
  //private caseNumber: any;

  // Observable string sources
  private print = new Subject<string>();

  // Observable string streams
  caseNumber$ = this.print.asObservable();

  // Service message commands
  //publishData(data: string) {
  //  this.caseNumber.next(data);
  //}

  printToCart3(a: string){
    this.print.next(a)
  };


  // publishData(data: string) {
  //     console.log('Inside publish data: ' + data);
  //     this.caseNumber = data;
  // }

  // subscribeData() {
  //     console.log('Inside subscribeData: ' + this.caseNumber);
  //     return this.caseNumber;
  // }
}
