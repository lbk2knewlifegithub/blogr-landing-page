import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'lbk-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button>
      <img
        [hidden]="open"
        src="assets/images/icon-hamburger.svg"
        alt="Hamburger"
      />
      <img [hidden]="!open" src="assets/images/icon-close.svg" alt="Close" />
    </button>
  `,
})
export class MenuComponent {
  @Input() open!: boolean;
}
