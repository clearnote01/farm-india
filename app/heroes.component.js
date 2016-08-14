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
var HEROES = [
    { id: 11, name: 'L' },
    { id: 12, name: 'Ace' },
    { id: 13, name: 'Scooby' },
    { id: 14, name: 'Luffy' },
    { id: 15, name: 'Mabel' },
    { id: 16, name: 'Ricki' },
    { id: 16, name: 'Martha' }
];
var HeroesComponent = (function () {
    function HeroesComponent() {
        this.title = 'Death banding';
        this.heroes = HEROES;
    }
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    ;
    HeroesComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            template: "\n      <h1>{{title}}</h1>\n      <h2>My Heroes</h2>\n      <a href=\"/contact\">Contact Us!</a>\n      <ul class=\"heroes\">\n        <li *ngFor=\"let hero of heroes\"\n        [class.selected]=\"hero===selectedHero\"\n        (click)=\"onSelect(hero)\">\n          <!-- list of heroes -->\n          <span class=\"badge\">\n              {{hero.id}}\n          </span>\n          <span>\n              {{hero.name}}\n          </span>\n      </li>\n      </ul>\n      <my-hero-detail [hero]=\"selectedHero\">\n      </my-hero-detail>\n    ",
            styles: ["\n  .selected {\n    background-color: #CFD8DC !important;\n    color: white;\n  }\n  .heroes {\n    margin: 0 0 2em 0;\n    list-style-type: none;\n    padding: 0;\n    width: 15em;\n  }\n  .heroes li {\n    cursor: pointer;\n    position: relative;\n    left: 0;\n    background-color: #EEE;\n    margin: .5em;\n    padding: .3em 0;\n    height: 1.8em;\n    border-radius: 6px;\n  }\n  .heroes li.selected:hover {\n    background-color: #BBD8DC !important;\n    color: white;\n  }\n  .heroes li:hover {\n    color: #607D8B;\n    background-color: #DDD;\n    left: .5em;\n  }\n  .heroes .text {\n    position: relative;\n    top: -3;\n  }\n  .heroes .badge {\n    display: inline-block;\n    font-size: small;\n    color: white;\n    padding: 0.5em 0.7em 0 0.7em;\n    background-color: #607D8B;\n    line-height: 1em;\n    position: relative;\n    left: -1px;\n    top: -4px;\n    height: 1.9em;\n    margin-right: .8em;\n    border-radius: 4px 0 0 4px;\n  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map