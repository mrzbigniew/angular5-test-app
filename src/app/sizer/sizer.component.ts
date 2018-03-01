import { Component, OnInit, Input, Output, EventEmitter, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.scss']
})
export class SizerComponent implements OnInit {
  private _value = 1;
  private subject: Subject<number> = new Subject();

  @Output() fontSizeChange: EventEmitter<number> = new EventEmitter<number>();

  @Input() set fontSize(value: number) {
    this._value = value;
    this.subject.next(this._value);
  }

  get fontSize(): number {
    return this._value;
  }

  constructor(private dashboard: DashboardComponent) {
    this.subject.next(this._value);
  }

  ngOnInit() {
    this.subject.debounceTime(200).subscribe((x) => {
      this.fontSizeChange.emit(x);
    });
  }
}
