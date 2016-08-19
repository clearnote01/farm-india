import { Component } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/template/app.component.html'
})

export class AppComponent { 
    title = 'Fire banding';
    //selectedHero = HEROES[0];
}

