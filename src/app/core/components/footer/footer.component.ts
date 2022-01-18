import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as fromData from '@blogrs/shared/data';
import { LinkGroup } from 'src/app/models/link-group.model';

@Component({
  selector: 'lbk-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <footer
    class="relative container-large bg-black-blue-900  py-[75px] rounded-tr-[100px] lg:py-[70px[]]"
  >
    <div
      class="container grid gap-[72px] place-items-center lg:grid-cols-4 lg:place-items-stretch lg:gap-0"
    >
      <lbk-logo></lbk-logo>

      <lbk-links-footer
        class="lg:col-span-3"
        [linkGroups]="linkGroups"
      ></lbk-links-footer>
    </div>

    <lbk-author
      class="absolute bottom-0 left-1/2 -translate-x-1/2"
    ></lbk-author>
  </footer>`,
})
export class FooterComponent {
  linkGroups: LinkGroup[] = fromData.linkGroups;

  identifyLink(index: number, link: LinkGroup) {
    return link.name;
  }
}
