import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {

  private backgroundColour = this.defaultColor;

  @Input() defaultColor = 'white';
  @Input('highlight') highlightColor = 'green';


  @HostListener('mouseenter') over() {
    this.backgroundColour = this.highlightColor;
  };

  @HostListener('mouseleave') leave() {
    this.backgroundColour = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColour;
  };

  ngOnInit() {
    this.backgroundColour = this.defaultColor;
  }

  constructor() {
    //private elementRef: ElementRef, private renderer: Renderer
    //this.elementRef.nativeElement.style.backgroundColor = 'green';
    //this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');

  }

}
