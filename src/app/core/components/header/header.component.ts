import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="absolute top-0 left-0 w-full pt-14 z-50">
      <nav class="container flex justify-between items-center">
        <lbk-logo></lbk-logo>
        <!-- hamburger -->
        <lbk-hamburger></lbk-hamburger>
        <!-- hamburger -->
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
