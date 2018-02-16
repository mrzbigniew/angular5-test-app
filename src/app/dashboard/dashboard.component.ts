import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  someValue: number = null;

  constructor() { }

  ngOnInit() {
    this.getValue().subscribe((value) => {
      this.someValue = 1;
    });
  }

  getValue(): Observable<number> {
    return Observable.of<number>(this.someValue);
  }

  onClick($event) {
    setTimeout(() => {
      this.someValue = 2;
    });
  }
}
