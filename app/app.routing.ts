import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero.component';
//import { SignupComponent } from './signup/signup.component';


const appRoutes: Routes = [
    {
        path: 'dog', component: DogComponent
    },
    {
        path: 'cat', component: CatComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'hero', component: HeroComponent
    }
    //{
        //path: 'signup', component: SignupComponent
    //}
]

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);


