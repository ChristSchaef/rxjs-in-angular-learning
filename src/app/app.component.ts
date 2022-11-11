import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  }
