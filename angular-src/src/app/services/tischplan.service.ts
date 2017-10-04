import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TischplanService {
    constructor(private http: Http) {
        console.log('Task service initialized!');
    }
    getImHausListe() {
        return this.http.get('imHausListe')
            .map(res => res.json());
    }
    getAnreiseListe() {
        return this.http.get('anreiseListe')
            .map(res => res.json());
    }
    getTracesListe() {
        return this.http.get('tracesListe')
            .map(res => res.json());
    }
    getTables() {
    return this.http.get('tables')
      .map(res => res.json());
    }

  occupyTable(tableSonnbergZirbn) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('occupyTable', tableSonnbergZirbn, {headers: headers} )
      .map(res => res.json());
  }

  dispenseTable(tableSonnbergZirbn) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('dispenseTable', tableSonnbergZirbn, {headers: headers} )
      .map(res => res.json());
  }

}
