import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from '../pages/main-page/main-page.component';
import { CommonModule } from '@angular/common';
import { ListComponent } from '../components/list/list.component';
import { AddCharacterComponent } from '../components/add-character/add-character.component';

@NgModule({
  imports: [
     CommonModule
    ,FormsModule
  ],
  exports: [
     MainPageComponent
    ,ListComponent
    ,AddCharacterComponent
  ],
  declarations: [
     MainPageComponent
    ,ListComponent
    ,AddCharacterComponent
  ],
  providers: [],
})
export class DbzModule { }
