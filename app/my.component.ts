import { Component } from '@angular/core';

@Component({
    selector: 'my-name',
    template: `
        <div>{{name}}</div>
    `
})

export class MyComponent {
    name = "Utkarsh Raj";
} 

