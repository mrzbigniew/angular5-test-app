import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  private _title;
  items = [];
  @Output() titleChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() set title(value) {
    if (value) {
      this.items.push(value);
    }
    this._title = value;
    this.titleChange.emit(this.title);
  }

  get title() {
    return this._title;
  }

  constructor() { }
}
