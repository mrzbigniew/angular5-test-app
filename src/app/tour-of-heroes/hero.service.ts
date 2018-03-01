import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Hero } from './models/hero-data.model';

@Injectable()
export class HeroService {
  private heroes: Hero[] = [
    {
      id: 0,
      name: 'Hero 1',
      power: 10
    }, {
      id: 1,
      name: 'Hero 2',
      power: 11
    }
  ];

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return Observable.of<Hero[]>(this.heroes);
  }

  addHero(hero: Hero) {
    this.heroes.push(hero);
  }

  editHero(hero: Hero) {
    const sourceHero: Hero = this.heroes.find((current: Hero) => {
      return current.id === hero.id;
    });
    sourceHero.name = hero.name;
    sourceHero.power = hero.power;
  }

  deleteHero(hero: Hero) {
    this.heroes.splice(this.heroes.findIndex((val: Hero) => {
      return val.id === hero.id;
    }), 1);
  }
}
