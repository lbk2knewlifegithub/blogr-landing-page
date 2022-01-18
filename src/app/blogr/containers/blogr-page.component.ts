import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-blogr-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="container-large overflow-hidden">
      <lbk-intro></lbk-intro>

      <lbk-features-top
        class="block mt-[100px] md:mt-32 lg:mt-[150px]"
      ></lbk-features-top>

      <lbk-infrastructure
        class="block mt-64 md:mt-80 xl:mt-14"
      ></lbk-infrastructure>

      <lbk-features-bottom
        class="block mt-20 xl:mt-[116px]"
      ></lbk-features-bottom>
    </main>
  `,
})
export class BlogrPageComponent {}
