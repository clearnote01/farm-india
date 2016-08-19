"use strict";
var router_1 = require('@angular/router');
var dog_component_1 = require('./dog/dog.component');
var cat_component_1 = require('./cat/cat.component');
var profile_component_1 = require('./profile/profile.component');
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
var appRoutes = [
    {
        path: 'dog', component: cat_component_1.CatComponent
    },
    {
        path: 'cat', component: dog_component_1.DogComponent
    },
    {
        path: 'profile', component: profile_component_1.ProfileComponent
    },
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