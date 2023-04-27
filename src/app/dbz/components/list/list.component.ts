import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList : Character[] = [];

  @Output()
  emmitDeleteCharacter : EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit() { }

  onDeleteCharacter(id?: string): void {
    this.emmitDeleteCharacter.emit(id ?? '');
  }
}
