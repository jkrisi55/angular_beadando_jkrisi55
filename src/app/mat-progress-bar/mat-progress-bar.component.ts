import {Component, Input} from '@angular/core';
@Component({
  selector: 'progress-bar-determinate-example',
  templateUrl: 'mat-progress-bar.component.html'
})
export class MatProgressBarComponent {
  @Input() progress : number = 0;
}
