import { Component } from '@angular/core';
import { MainService } from './services/main.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ MainService],
})
export class AppComponent {
  title = 'App works!';
}
