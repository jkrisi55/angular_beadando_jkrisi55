import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-task1-a',
  templateUrl: './task1-a.component.html',
  styleUrls: ['./task1-a.component.less']
})
export class Task1AComponent {

  img_sources : string[] = ["assets/images/img_a.png", "assets/images/img_b.png", "assets/images/img_c.png"]
  @Input() counter : number = 0;
  bgcolor : string = "grey";
  increment() {
    if (this.counter < 4) {
      this.counter += 1;
    } else if (this.counter == 4) {
      this.counter += 1;
      this.bgcolor = "green";
    }
  }

}
