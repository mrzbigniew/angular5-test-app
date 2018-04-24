import {Component, OnInit} from '@angular/core';

@Component({selector: 'app-checkbox-test', templateUrl: './checkbox-test.component.html', styleUrls: ['./checkbox-test.component.scss']})
export class CheckboxTestComponent implements OnInit {
  items = [
    {
      label: 'checkbox 1',
      value: 1
    }, {
      label: 'checkbox 2',
      value: 2
    }, {
      label: 'checkbox 3',
      value: 3
    }, {
      label: 'checkbox 4',
      value: 4
    }
  ];

  selectedItem = 2;

  constructor() {}

  ngOnInit() {}

  logData($event) {
    console.log($event);
  }

  trackByFn(item: any) {
    console.log(item);
    return item.value;
  }
}
