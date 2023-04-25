import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  public listHeroes : string[] = ['Spiderman', 'Hulk', 'Capitan America', 'Ironman'];
  public deletedHero? : string;

  constructor() { }

  ngOnInit() { }

  public deleteHero(index?: number): void {
      index = index ?? this.listHeroes.length -1;

      const hero : string[] = this.listHeroes.splice(index, 1);
      this.deletedHero =  hero[0];
  }
}
