import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-blogr-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main>
      <lbk-intro></lbk-intro>

      <lbk-features class="block mt-[100px]"></lbk-features>

      <lbk-infrastructure class="block mt-64"></lbk-infrastructure>

      <lbk-features-two class="block mt-20"></lbk-features-two>
    </main>
  `,
})
export class BlogrPageComponent {}
