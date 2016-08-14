import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
        <my-heroes></my-heroes>
        <my-name></my-name>
    `
})

export class AppComponent { 
    title = 'Fire banding';
    //selectedHero = HEROES[0];
}

