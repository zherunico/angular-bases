import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="IncreaseBy(1)">+1</button>
    <button (click)="DecreaseBy(1)">-1</button>
    <button (click)="Reset()">Reset</button>
  `
})

export class CounterComponent implements OnInit {
  public initialCounter: number = 10;
  public counter: number = this.initialCounter;

  constructor() {}

  ngOnInit() { }

  IncreaseBy(value : number): void {
    this.counter +=value;
  }

  DecreaseBy(value: number): void {
    this.counter -=value;
  }

  Reset(): void {
    this.counter = this.initialCounter;
  }
}
