import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TourOfHeroesComponent } from './tour-of-heroes.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { HeroService } from './hero.service';
import { HeroEditorComponent } from './hero-editor/hero-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TourOfHeroesComponent
  ],
  declarations: [
    TourOfHeroesComponent,
    HeroesListComponent,
    HeroEditorComponent
  ],
  providers: [
    HeroService
  ]
})
export class TourOfHeroesModule {
  constructor( @Optional() @SkipSelf() parent: TourOfHeroesModule) {
    if (parent) {
      throw new Error('TourOfHeroesModule is already declared');
    }
  }
}
