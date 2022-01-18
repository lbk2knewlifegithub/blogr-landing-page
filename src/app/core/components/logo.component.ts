import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-logo',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a routerLink="/">
      <img class="max-w-[81px]" src="assets/images/logo.svg" alt="Logo" />
    </a>

  `,
})
export class LogoComponent {}
