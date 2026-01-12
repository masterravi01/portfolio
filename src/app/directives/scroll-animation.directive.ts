import { Directive, ElementRef, inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  private elementRef = inject(ElementRef);
  private renderer = inject(Renderer2);

  ngOnInit() {
    // Initial state: Hidden and shifted down
    this.renderer.addClass(this.elementRef.nativeElement, 'opacity-0');
    this.renderer.addClass(this.elementRef.nativeElement, 'translate-y-8');
    this.renderer.addClass(this.elementRef.nativeElement, 'transition-all');
    this.renderer.addClass(this.elementRef.nativeElement, 'duration-700');
    this.renderer.addClass(this.elementRef.nativeElement, 'ease-out');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Reveal state: Visible and original position
          this.renderer.removeClass(this.elementRef.nativeElement, 'opacity-0');
          this.renderer.removeClass(this.elementRef.nativeElement, 'translate-y-8');
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    observer.observe(this.elementRef.nativeElement);
  }
}
