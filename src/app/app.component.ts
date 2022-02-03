import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  name: string = '';
  title = 'coursang';
  constructor() {

  }
  ngOnInit(): void {
    const double = (x: number) => x * 2;
    console.log(double(3));
    console.log(this.addAndDouble(3, 2));
    ;
  }

  addAndDouble = (x: any, y: any) => {
    const sum = x + y;
    return sum * 2;
  }

}
