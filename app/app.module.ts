import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail.component';
import { AppComponent }  from './app.component';
import { HeroesComponent } from './heroes.component';
import { MaterialAppComponent } from './material.component';
import { MyComponent } from './my.component';

import { MdCardModule } from '@angular2-material/card';
import { MdButtonModule } from '@angular2-material/button';
import { MdToolbarModule }  from '@angular2-material/toolbar';
import { MdProgressBarModule } from '@angular2-material/progress-bar';


//import {MdSlideToggleModule} from '@angular2-material/slide-toggle';
//import {MdSliderModule} from '@angular2-material/slider';

import {MdIconModule} from '@angular2-material/icon';
import {MdGridListModule} from '@angular2-material/grid-list';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';

import {MdListModule} from '@angular2-material/list';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdProgressCircleModule} from '@angular2-material/progress-circle';
import {MdInputModule} from '@angular2-material/input';
import {MdRadioModule} from '@angular2-material/radio';
import {MdSidenavModule} from '@angular2-material/sidenav';

import {MdTabsModule} from '@angular2-material/tabs';
// import {MdTooltipModule} from '@angular2-material/tooltip';

//import {MdRippleModule} from '@angular2-material/core/ripple';
//import {PortalModule} from '@angular2-material/core/portal/portal-directives';
//import {OverlayModule} from '@angular2-material/core/overlay/overlay-directives';
//import {MdMenuModule} from '@angular2-material/menu/menu';
//import {RtlModule} from '@angular2-material/core/rtl/dir';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule, 
                   MdButtonModule, MdCardModule, MdToolbarModule, 
                   MdProgressBarModule, 
                  MdInputModule, MdRadioModule, MdSidenavModule, 
                  MdListModule, MdCheckboxModule, MdProgressCircleModule,
                   // MdTooltipModule, 
                   MdTabsModule,
                  MdIconModule, MdGridListModule, MdButtonToggleModule, MdCheckboxModule
            ],
  declarations: [ AppComponent,
                  HeroDetailComponent,
                  HeroesComponent,
                  MyComponent,
                  MaterialAppComponent
            ],
  bootstrap:    [ AppComponent
            ]
})

export class AppModule { }
