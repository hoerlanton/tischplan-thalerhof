import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {
  constructor(private http: Http) {
    console.log('Task service initialized!');
  }

  getImHausList() {
    return this.http.get('getImHausList')
      .map(res => res.json());
  }

  getTables() {
    return this.http.get('tables')
      .map(res => res.json());
  }

  getInformationElements() {
    return this.http.get('information')
      .map(res => res.json());
  }

  getInformationEmployees() {
    return this.http.get('informationEmployees')
      .map(res => res.json());
  }

  occupyTable(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('occupyTable', dataString, {headers: headers})
      .map(res => res.json());
  }

  removeTable(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('removeTable', dataString, {headers: headers})
      .map(res => res.json());
  }

  addTable(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('addTable', dataString, {headers: headers})
      .map(res => res.json());
  }

  dispenseTable(tableTerasse) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('dispenseTable', tableTerasse, {headers: headers})
      .map(res => res.json()
      );
  }

  removePlaceholder(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('removePlaceholder', dataString, {headers: headers})
      .map(res => res.json()
      );
  }

  addPlaceholder(tableTerasse) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('addPlaceholder', tableTerasse, {headers: headers})
      .map(res => res.json()
      );
  }

  addInformationToTable(dataString) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('addInformationToTable', dataString, {headers: headers})
      .map(res => res.json()
      );
  }

  sendInformation(newInformation) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('newInformationToTables', newInformation, {headers: headers})
      .map(res => res.json());
  }

  sendInformationToBox(newInformation) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('newInformationToBox', newInformation, {headers: headers})
      .map(res => res.json());
  }


  deleteInformationElement(informationElement) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('deleteInformationElement', informationElement, {headers: headers})
      .map(res => res.json());
  }

  updateImHausListElement(informationElements2) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('updateImHausListElement', informationElements2, {headers: headers})
      .map(res => res.json());
  }

  sendInformationToNoteBlock(newInformation) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post('newNote', newInformation, {headers: headers})
      .map(res => res.json());
  }

  getNoteElements() {
    return this.http.get('getNote')
      .map(res => res.json());
  }
}
