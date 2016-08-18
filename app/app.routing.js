"use strict";
var router_1 = require('@angular/router');
//import { DogComponent } from './dog/dog.component';
//import { CatComponent } from './cat/cat.component';
//import { ProfileComponent } from './profile/profile.component';
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
var appRoutes = [
    //{
    //path: 'dog', component: CatComponent
    //},
    //{
    //path: 'cat', component: DogComponent
    //},
    //{
    //path: 'profile', component: ProfileComponent
    //},
    {
        path: 'login', component: login_component_1.LoginComponent
    },
    {
        path: 'signup', component: signup_component_1.SignupComponent
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map