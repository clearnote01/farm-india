import { Routes, RouterModule } from '@angular/router';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
    {
        path: 'dog', component: CatComponent
    },
    {
        path: 'cat', component: DogComponent
    },
    {
        path: 'profile', component: ProfileComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'signup', component: SignupComponent
    }
]

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);


