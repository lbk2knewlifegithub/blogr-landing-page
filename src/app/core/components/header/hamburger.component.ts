import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-hamburger',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button>
      <img src="assets/images/icon-hamburger.svg" alt="Hamburger" />
    </button>
  `,
})
export class HamburgerComponent {}
