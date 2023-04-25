import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {
  public name : string = 'Ironman';
  public age : number = 45;
  public enableEditButtons : boolean = false;

  constructor() { }

  ngOnInit() { }

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription() : string {
    return `${this.name} - ${this.age}`
  }

  public setHeroName(name : string) : void {
      this.name = name;
  }

  public setHeroAge(age : number): void {
      this.age = age;
  }

  public enableEdit(): void {
    this.enableEditButtons = true;
  }
}
