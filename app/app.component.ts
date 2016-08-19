import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
//import { SignupComponent } from './signup/signup.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { ProfileComponent } from './profile/profile.component';
import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MaterialAppComponent } from './material.component';


@Component({
  selector: 'my-app',
  templateUrl: 'app/template/app.component.html'
=======

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

