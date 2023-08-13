import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task2-a-td',
  templateUrl: './task2-a-td.component.html',
  styleUrls: ['./task2-a-td.component.less']
})
export class Task2ATdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() dark_style? : boolean; 
  toggled = false;
  td_click_toggle() : void {
    this.toggled = !this.toggled;
  }
}
