import { Component } from '@angular/core';
import { Subject } from './subject';
import { SUBJECTS } from './mock-subjects';

@Component({
  selector: 'app-task1-b',
  templateUrl: './task1-b.component.html',
  styleUrls: ['./task1-b.component.less']
})
export class Task1BComponent {
  data_to_child : string = "";
  subjects : Subject[] = SUBJECTS;
  selected_subject? : Subject;
  update_data_to_child(data_from_child: Subject) : void {
    this.selected_subject = data_from_child;
    console.log(this.selected_subject);
  }
}
