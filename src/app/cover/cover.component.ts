import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent implements OnInit {
  @Input() isVisible = false;
  private element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    const cover = this;
    document.body.appendChild(this.element);
  }

}
