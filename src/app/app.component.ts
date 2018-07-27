import { Component } from '@angular/core';
import { delay } from 'q';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  isCountDown : boolean;

  display(){
    setTimeout(() => {this.isCountDown = false;}, 6000);
  }

  constructor(){
    this.isCountDown = true;
    this.display();
  }
}
