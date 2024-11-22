import {Directive, ElementRef, Host, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
@Input() appHighlightOnFocus : string = '';

  constructor(private el: ElementRef) { }

  @HostListener('focus') onFocus(): void {
    this.highlight(this.appHighlightOnFocus);
  }
  @HostListener('blur') onBlur(): void {
    this.highlight('');
  }
  private highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
