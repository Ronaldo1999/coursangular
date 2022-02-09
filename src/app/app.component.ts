import { Component, Input, OnInit } from '@angular/core';

type Fruit = {};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

@Input() name: string | undefined;

  title = 'coursang';
  public testo = "bbsbbdjbjcjs";

  constructor() {}
  ngOnInit(): void {
    const double = (x: number) => x * 2;
    console.log(double(3));
    console.log(this.addAndDouble(3, 2));
    console.log(this.testFunction());
  }

  addAndDouble = (x: any, y: any) => {
    const sum = x + y;
    return sum * 2;
  };

  // Immuability Principe
  testFunction() {
    const person = { name: 'john' };
    const newPerson = { ...person, age: 20 };
    return newPerson;
  }

  // Generic methode
  testGeneric<Fruit>(banane: Fruit): Fruit {
    return banane;
  }
}
