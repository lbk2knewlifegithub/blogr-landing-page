import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <lbk-header></lbk-header>
    <router-outlet></router-outlet>
    <lbk-footer class="block mt-[100px] md:mt-52 xl:mt-[124px]"></lbk-footer>
  `,
})
export class AppComponent {}
