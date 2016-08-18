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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var hero_detail_component_1 = require('./hero-detail.component');
var app_component_1 = require('./app.component');
var heroes_component_1 = require('./heroes.component');
var material_component_1 = require('./material.component');
var my_component_1 = require('./my.component');
var card_1 = require('@angular2-material/card');
var button_1 = require('@angular2-material/button');
var toolbar_1 = require('@angular2-material/toolbar');
var progress_bar_1 = require('@angular2-material/progress-bar');
//import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
//import {MdSliderModule} from '@angular2-material/slider';
var icon_1 = require('@angular2-material/icon');
var grid_list_1 = require('@angular2-material/grid-list');
var button_toggle_1 = require('@angular2-material/button-toggle');
var list_1 = require('@angular2-material/list');
var checkbox_1 = require('@angular2-material/checkbox');
var progress_circle_1 = require('@angular2-material/progress-circle');
var input_1 = require('@angular2-material/input');
var radio_1 = require('@angular2-material/radio');
var sidenav_1 = require('@angular2-material/sidenav');
var tabs_1 = require('@angular2-material/tabs');
// import {MdTooltipModule} from '@angular2-material/tooltip';
//import {MdRippleModule} from '@angular2-material/core/ripple';
//import {PortalModule} from '@angular2-material/core/portal/portal-directives';
//import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
//import {MdMenuModule} from '@angular2-material/menu/menu';
//import {RtlModule} from '@angular2-material/core/rtl/dir';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                button_1.MdButtonModule, card_1.MdCardModule, toolbar_1.MdToolbarModule,
                progress_bar_1.MdProgressBarModule,
                input_1.MdInputModule, radio_1.MdRadioModule, sidenav_1.MdSidenavModule,
                list_1.MdListModule, checkbox_1.MdCheckboxModule, progress_circle_1.MdProgressCircleModule,
                // MdTooltipModule, 
                tabs_1.MdTabsModule,
                icon_1.MdIconModule, grid_list_1.MdGridListModule, button_toggle_1.MdButtonToggleModule, checkbox_1.MdCheckboxModule
            ],
            declarations: [app_component_1.AppComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                my_component_1.MyComponent,
                material_component_1.MaterialAppComponent
            ],
            bootstrap: [app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map