import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { CatComponent } from './cat/cat.component'
import { DogComponent } from './dog/dog.component'
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  routing
            ],
  declarations: [ AppComponent,
                    LoginComponent,
                    SignupComponent,
                    DogComponent,
                    ProfileComponent,
                    CatComponent
            ],
  providers: [
      appRoutingProviders
            ],
  bootstrap:    [ AppComponent
            ]
})

export class AppModule { }
