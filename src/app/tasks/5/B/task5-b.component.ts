/*
 * <<licensetext>>
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Person } from '../A/person';
import { PersonGeneratorService } from '../A/person-generator.service';
import { Task4BSnackbarService } from './task4-b-snackbar.service';

@Component({
  selector: 'app-task5-b',
  templateUrl: './task5-b.component.html',
  styleUrls: ['./task5-b.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Task5BComponent {

  constructor(peopleGenerator: PersonGeneratorService, snackBar: Task4BSnackbarService) {
    this.peopleGenerator = peopleGenerator;
    this.snackBar = snackBar;
  }

  peopleGenerator : PersonGeneratorService;
  snackBar : Task4BSnackbarService;
  people : Person[] = [];

  ngOnInit(): void {
    this.people = this.peopleGenerator.generatePeople(10000);
  }

  on_scroll_child_click(person: string) : void {
    alert(person);
  }
}
