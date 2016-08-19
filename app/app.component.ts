import { Component } from '@angular/core';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MaterialAppComponent } from './material.component';


@Component({
  selector: 'my-app',
  template: `
        <material-app></material-app>
    `
})

export class AppComponent { 
    title = 'Fire banding';
    //selectedHero = HEROES[0];
}

