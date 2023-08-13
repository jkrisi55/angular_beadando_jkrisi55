import { Component, OnInit } from '@angular/core';
import { ReversePipePipe } from 'src/app/reverse-pipe.pipe';

@Component({
  selector: 'app-task3-a',
  templateUrl: './task3-a.component.html',
  styleUrls: ['./task3-a.component.less']
})
export class Task3AComponent implements OnInit {

  ngOnInit() {
  const reversePipe = new ReversePipePipe;
    for (let element of this.mock_array) {
      console.log(reversePipe.transform(element));
    }
  }
  constructor() {}

  mock_array : string[] = ['Malenia', 'Mohg', 'Morgott'];
  display_array : string[] = [];

  reverse() : void {
    const reversePipe = new ReversePipePipe;
    var reverse_input = ((document.getElementById("reverse_input") as HTMLInputElement).value);
    if (reverse_input.trim().length !== 0) {
      this.display_array.push(reversePipe.transform(reverse_input))
    }
  }
}
