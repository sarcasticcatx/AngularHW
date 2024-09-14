import { Directive, ElementRef, HostListener, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  //mesto na div-ot da dodavash appHoverShadow od tuka direktno se aplicira na elementite
  selector: '[appHoverShadow]',
  standalone: true
})
export class HoverShadowDirective implements OnInit {
// If these lines were placed inside a method 
// (for example, inside ngOnInit), 
// they would attempt to inject the 
// dependencies every time the method 
// was called, not just when the directive 
// instance was created. This could lead to
//  unnecessary overhead and potentially 
//  unexpected behavior if the injection logic
//   is executed multiple times.

private elementRef = inject(ElementRef);
private renderer = inject(Renderer2);

ngOnInit(): void {
   this.renderer.setStyle(
    this.elementRef.nativeElement,'transition', '0.1s ease-in-out'
   );

   this.renderer.listen(this.elementRef.nativeElement, 'click', () => {
    console.log('renderer event called;')
   })
}
// The @HostListener decorator in Angular is 
// a powerful tool that allows you to listen 
// for DOM events directly on the host element
//  of a component or directive. This means you 
//  can react to user interactions or other events 
//  happening on the element itself, such as clicks, 
//  keyboard events, or mouse movements, and execute
//   custom logic in response.
@HostListener('mouseenter') onMouseEnter() {
  this.renderer.setStyle(
    this.elementRef.nativeElement,'box-shadow',  '0 3px 10px rgba(228, 117, 154), 0 3px 10px rgba(167, 45, 85)'
  )
}

@HostListener('mouseleave') onMouseLeave() {
  this.renderer.setStyle(this.elementRef.nativeElement,'box-shadow','none')
}
}
