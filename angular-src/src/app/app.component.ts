import { Component } from '@angular/core';
import { TischplanService } from './services/tischplan.service';
import { SharedService } from './components/sharedService';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TischplanService, SharedService],
})
export class AppComponent {
  title = 'App works!';
}
