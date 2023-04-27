import { Component } from '@angular/core';
import { DbzService } from '../../service/dbz.service';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  get characters(): Character[] {
    return this.dbzService.characters;
  }

  constructor(private dbzService: DbzService) {

  }

  ngOnInit() { }

  onNewCharacter(character: Character): void {
    this.dbzService.newCharacter(character);
  }

  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacter(id);
  }
}
