import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appToggleReadMore]',
  standalone: true,
})
export class ToggleReadMoreDirective implements OnInit {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  isInititiallyOpen = input(false);
  readMoreDetailsEl: HTMLDivElement;
  isOpen = false;

  ngOnInit(): void {
    this.readMoreDetailsEl =
      this.elementRef.nativeElement.querySelector('.read-more');

    this.isOpen = this.isInititiallyOpen();

    this.renderer.setStyle(
      this.readMoreDetailsEl,
      'display',
      this.isOpen ? 'block' : 'none'
    );
  }

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    this.renderer.setStyle(
      this.readMoreDetailsEl,
      'display',
      this.isOpen ? 'block' : 'none'
    );
  }
}
