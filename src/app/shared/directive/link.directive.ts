import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[href]',
})
export class LinkDirective {
  @Input() href: string | undefined;
  @HostListener('click', ['$event'])

  noop(event: MouseEvent) {
    debugger
    if (
      this.href === '#hero' ||
      this.href === '#about' ||
      this.href === '#services' ||
      this.href === '#verticals' ||
      this.href === '#contact'
    ) {
      event.preventDefault();
    }
  }
}
