import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-unless-directive-test',
  templateUrl: './unless-directive-test.component.html',
  styleUrls: ['./unless-directive-test.component.scss']
})
export class UnlessDirectiveTestComponent implements OnInit {
  isActive = false;

  constructor() { }

  ngOnInit() {
  }


  changeActive(event: SimpleChange): void {
    this.isActive = !this.isActive;
  }
}
