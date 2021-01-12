import { Directive, ElementRef } from '@angular/core';
import { elementAt } from 'rxjs/operators';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.textDecoration = "underline";
    el.nativeElement.style.fontSize = '16px';
  }
}
