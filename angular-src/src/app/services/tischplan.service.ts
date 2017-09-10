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
}
