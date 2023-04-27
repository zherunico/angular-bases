import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  emmitNewCharacter : EventEmitter<Character> = new EventEmitter();

  public character : Character = {
     id: ''
    ,name: ''
    ,power: 0
  };

  constructor() { }

  ngOnInit() { }

  onAddCharacter(): void {
    this.emmitNewCharacter.emit(this.character);

    this.character = {
       id: ''
      ,name: ''
      ,power:0
    }
  }
}
