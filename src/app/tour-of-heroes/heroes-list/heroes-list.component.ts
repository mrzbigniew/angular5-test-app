import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../models/hero-data.model';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss']
})
export class HeroesListComponent implements OnInit {
  heroList: Hero [];
  hero: Hero;

  @Output() heroSelected: EventEmitter<Hero> = new EventEmitter<Hero>();

  constructor(private heroService: HeroService ) {
  }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((heroes: Hero[]) => {
      this.heroList = heroes;
    });
  }

  selectHero(hero: Hero) {
    this.heroSelected.emit(hero);
  }
}
