import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class NavService {
  // Observable navItem source
  private _navItemSource = new BehaviorSubject<any>(0);
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(tables) {
    console.log('number in service:');
    console.log(tables);
    this._navItemSource.next(tables);
  }
}
