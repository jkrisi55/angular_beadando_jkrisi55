import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-load-image',
  templateUrl: './load-image.component.html',
  styleUrls: ['./load-image.component.less']
})
export class LoadImageComponent {

  @Input() source? : string;
  counter : number = 0;

  @Output() on_image_click_emitter = new EventEmitter<number>();
  emit_click() {
    this.on_image_click_emitter.emit();
  }
}
