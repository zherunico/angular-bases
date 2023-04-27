import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/module/counter.module';
import { HeroModule } from './heroes/module/hero.module';
import { DbzModule } from './dbz/module/dbz.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
     AppComponent
  ],
  imports: [
     BrowserModule
    ,CounterModule
    ,HeroModule
    ,DbzModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
