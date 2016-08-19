import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
//import { SignupComponent } from './signup/signup.component';
import { CatComponent } from './cat/cat.component';
import { DogComponent } from './dog/dog.component';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/template/app.component.html'
})

export class HeroComponent { 
    title = 'Fire banding';
    //selectedHero = HEROES[0];
}

