import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../models/hero-data.model';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from '@angular/core/src/event_emitter';

@Component({
  selector: 'app-hero-editor',
  templateUrl: './hero-editor.component.html',
  styleUrls: ['./hero-editor.component.scss']
})
export class HeroEditorComponent implements OnInit {
  @Input() hero: Hero;

  constructor() { }

  ngOnInit() {
  }

  save() {

  }
}
