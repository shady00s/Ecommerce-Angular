import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCart]'
})
export class CartDirective {

  constructor(private elementRef: ElementRef) {
    
  }
  @HostListener('click') onClick(event: any): void {
    console.log('working')
    this.elementRef
 
  }
}


