import { Directive, ElementRef, HostListener, Input, Renderer2, inject } from '@angular/core';

@Directive({
  selector: '[appTilt]',
  standalone: true
})
export class TiltDirective {
  private el = inject(ElementRef);
  private renderer = inject(Renderer2);

  @Input() tiltScale = 1.02;     // Slight scale up
  @Input() tiltMaxAngle = 5;     // Max tilt angle in degrees
  @Input() tiltPerspective = 1000; // Perspective depth

  constructor() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
    this.renderer.setStyle(this.el.nativeElement, 'transform-style', 'preserve-3d');
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (window.innerWidth < 1024) return;

    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element
    const y = event.clientY - rect.top;  // y position within the element
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -this.tiltMaxAngle; // Invert axis for natural tilt
    const rotateY = ((x - centerX) / centerX) * this.tiltMaxAngle;

    this.renderer.setStyle(
      this.el.nativeElement, 
      'transform', 
      `perspective(${this.tiltPerspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${this.tiltScale}, ${this.tiltScale}, ${this.tiltScale})`
    );
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(
      this.el.nativeElement, 
      'transform', 
      `perspective(${this.tiltPerspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    );
    // Slower transition on reset for smoothness
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.5s ease-out');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    // Fast transition for responsiveness
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 0.1s ease-out');
  }
}
