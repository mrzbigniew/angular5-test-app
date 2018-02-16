import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menuVisible = false;

  @HostListener('document:click', ['$event'])
  onMouseClick($event: MouseEvent) {
    if (this.menuVisible) {
      this.menuVisible = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

  onHamburgerClick(event: MouseEvent) {
    event.stopPropagation();
    this.menuVisible = !this.menuVisible;
  }

  onMenuItemClick(item) {
    console.log(item);
  }
}
