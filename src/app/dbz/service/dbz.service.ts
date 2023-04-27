import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character[] = [];

  constructor() { }

  newCharacter(character: Character): void {
      this.characters.push({
        id: uuid()
        ,name: character.name
        ,power: character.power
      });
  }

  deleteCharacter(id: string): void {
    this.characters = this.characters.filter(o=>
      o.id !== id
    );
  }
}
