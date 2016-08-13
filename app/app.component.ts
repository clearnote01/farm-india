import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

const HEROES: Hero[] = [
    {  id: 11, name: 'L' },
    {  id: 12, name: 'Ace' },
    {  id: 13, name: 'Scooby' },
    {  id: 14, name: 'Luffy' },
    {  id: 15, name: 'Mabel' },
    {  id: 16, name: 'Ricki' },
    {  id: 16, name: 'Martha' }
];



@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name">
      </div>
      <h2>My Heroes</h2>
      <ul class="heroes">
        <li *ngFor="let hero of heroes"
        (click)="onSelect(hero)">
          <!-- list of heroes -->
          <span class="badge">
              {{hero.id}}
          </span>
          <span>
              {{hero.name}}
          </span>
      </li>
      </ul>
    `,
    styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.8em;
    border-radius: 6px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .5em;
  }
  .heroes .text {
    position: relative;
    top: -3;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.5em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.9em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
  `]
})


export class AppComponent { 
    title = 'Death banding';
    selectedHero: Hero = {
        id: 0,
        name: 'King'
    };
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    };
    public heroes = HEROES;
}

