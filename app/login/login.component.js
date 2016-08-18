"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var LoginComponent = (function () {
    function LoginComponent() {
        this.isAuth = false;
        this.response = 'Enter your name and pass';
    }
    LoginComponent.prototype.submit_login = function () {
        console.log(this.uname);
        if (this.uname == 'Utkarsh') {
            this.response = 'All good';
        }
        else {
            this.response = 'Not good';
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login-app',
            template: "\n            <h1>Login here</h1>\n            <h3>{{response}}</h3>\n            <form action=\"\">\n            Enter name:(Utkarsh)\n            <input name=\"name\" type=\"text\" [(ngModel)]=\"uname\" placeholder=\"name\">\n            <br>\n            <input type=\"password\" name=\"pass\" [(ngModel)]=\"upass\" placeholder=\"pass\">\n            <button (click)=\"submit_login()\" type=\"submit\">Submit</button>\n            </form>\n    {{uname}} {{upass}}\n        "
        }), 
        __metadata('design:paramtypes', [])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map