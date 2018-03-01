import { Component, OnInit } from '@angular/core';

import { SizerComponent } from '../sizer/sizer.component';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-sizer-number',
  templateUrl: './sizer-number.component.html',
  styleUrls: ['./sizer-number.component.scss']
})
export class SizerNumberComponent implements OnInit {
  subject: Subject<number>;
  sizerValue: number;

  constructor(private sizer: SizerComponent) {

  }

  ngOnInit() {
    this.sizerValue = this.sizer.fontSize;
  }

  resetSizer() {
    this.sizer.fontSize = 1;
  }
}
