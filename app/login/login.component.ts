import { Component } from '@angular/core';
import { AuthenticateService } from './authenticate.service';

@Component({
    selector: 'login-app',
    template: `
            <h1>Login here</h1>
            <h3>{{response}}</h3>
            <form action="">
            Enter name:(Utkarsh)
            <input name="name" type="text" [(ngModel)]="uname" placeholder="name">
            <br>
            <input type="password" name="pass" [(ngModel)]="upass" placeholder="pass">
            <button (click)="submit_login()" type="submit">Submit</button>
            </form>
    {{uname}} {{upass}}
        `
})


export class LoginComponent { 
    isAuth = false;
    response = 'Enter your name and pass';
    uname: string;
    upass: string;
    submit_login() {
        console.log(this.uname);
        if (this.uname == 'Utkarsh') {
            this.response = 'All good';
        }
        else {
            this.response = 'Not good';
        }
    }
}

