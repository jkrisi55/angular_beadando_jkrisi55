import { Component, OnInit } from '@angular/core';
import {configuration} from "src/app/configuration/configuration";

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.less']
})
export class SummaryComponent implements OnInit {
  expectedResult: number = 0;
  maxPoints: number = configuration.length * 4;
  thresholdDifference: number = 0.15;
  constructor() { }

  ngOnInit(): void {
    this.expectedResult = configuration.reduce((partialResult, task) => {
      const aPoints = Object.values(task.A.subTasks);
      const bPoints = Object.values(task.B.subTasks);
      if (aPoints > bPoints) {
        return partialResult +
          aPoints.filter(st => st).length +
          (bPoints.every(st => st) ? 1 : 0)
      } else {
        return partialResult +
          bPoints.filter(st => st).length +
          (aPoints.every(st => st) ? 1 : 0)
      }
    }, 0);
  }

}
