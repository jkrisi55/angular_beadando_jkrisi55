import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 0;
  dashedKeyPattern : string = '^([0-9]{8}-){1,2}[0-9]{8}$';
  spacedKeyPattern : string = '^([0-9]{8} ){1,2}[0-9]{8}$';

    constructor(private el: ElementRef) {
      if (this.el.nativeElement.value === 1) {
        this.el.nativeElement.style.backgroundColor = 'green';
      }
    }

    @HostListener('input') onInputChange() {
      if (this.el.nativeElement.value.match(this.dashedKeyPattern)) {
        this.highlight('green');
      } else if (this.el.nativeElement.value.match(this.spacedKeyPattern) && this.appHighlight > 0) {
        this.highlight('green')
        let temp = this.el.nativeElement.value;
        temp = temp.split("");
        temp = temp.map(function(item : string) {
          if (item === " ") {
            return "-";
          } else {
            return item;
          }
        });
        this.el.nativeElement.value = temp.join("");
        this.highlight('green')
      } else {
        this.highlight('');
      }
    }

    private highlight(color: string) {
      this.el.nativeElement.style.backgroundColor = color;
    }
}