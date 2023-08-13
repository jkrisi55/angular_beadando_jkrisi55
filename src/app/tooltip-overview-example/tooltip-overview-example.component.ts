import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'tooltip-overview-example',
  templateUrl: 'tooltip-overview-example.component.html',
  styleUrls: ['tooltip-overview-example.component.less']
})
export class TooltipOverviewExample {
  @Input() tooltip? : number;
  @Input() source : string = "";
  @Input() recently_clicked_image_source : string = "";
  
  @Output() on_image_click = new EventEmitter<string>();
  emit_click() : void {
    this.on_image_click.emit(this.source);
  }
}
