import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonGeneratorService } from './person-generator.service';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task5-a',
  templateUrl: './task5-a.component.html',
  styleUrls: ['./task5-a.component.less'],
})
export class Task5AComponent implements OnInit {

  drop(event: CdkDragDrop<Person[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  peopleGenerator : PersonGeneratorService;
  people : Person[] = [];
  todo : Person[] = [];
  done : Person[] = [];

  constructor(peopleGenerator: PersonGeneratorService) {
    this.peopleGenerator = peopleGenerator;
  }
  ngOnInit(): void {
    this.people = this.peopleGenerator.generatePeople(10);
    this.todo = this.people;
  }
}
