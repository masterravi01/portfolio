import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appMagnetic]',
  standalone: true
})
export class MagneticDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input() magneticStrength = 0.5; // How much the element moves relative to mouse

  constructor() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)');
    this.renderer.setStyle(this.el.nativeElement, 'will-change', 'transform');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (window.innerWidth < 1024) return;
    
    const rect = this.el.nativeElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = Math.floor((event.clientX - centerX) * this.magneticStrength);
    const deltaY = Math.floor((event.clientY - centerY) * this.magneticStrength);

    this.renderer.setStyle(this.el.nativeElement, 'transform', `translate(${deltaX}px, ${deltaY}px)`);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translate(0px, 0px)');
    
    // Reset transition after animation
    setTimeout(() => {
        this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)');
    }, 500);
  }
}
