import { Directive, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Directive({
  selector: '[appClickable]'
})
export class ClickableDirective implements OnChanges {
  @Input() myClick = {};
  clicked: Event = null;
  constructor() {
    Observable.of(this.myClick).subscribe((rs) => {
      console.log(rs);
    });

    Observable.of(this.clicked).subscribe((rs) => {
      console.log(rs);
    });
  }

  ngOnChanges(change: SimpleChanges) {
    console.log(change);
  }
}
