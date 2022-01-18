import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkGroup } from 'src/app/models/link-group.model';

@Component({
  selector: 'lbk-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <footer
    class="bg-black-blue-900 grid place-items-center py-[75px] rounded-tr-[100px]"
  >
    <lbk-logo></lbk-logo>

    <div class="grid gap-10 mt-[72px] text-center">
      <ng-container *ngFor="let linkGroup of linkGroups">
        <div class="text-white">
          <p class="font-bold font-ubuntu">{{ linkGroup.name }}</p>

          <ul class="mt-5 space-y-6">
            <li class="font-light" *ngFor="let link of linkGroup.links">
              {{ link.name }}
            </li>
          </ul>
        </div>
      </ng-container>
    </div>
  </footer>`,
})
export class FooterComponent {
  linkGroups: LinkGroup[] = [
    {
      name: 'Product',
      links: [
        {
          name: 'Overview',
          path: '',
        },
        {
          name: 'Pricing',
          path: '',
        },
        {
          name: 'Marketplace',
          path: '',
        },
        {
          name: 'Intergrations',
          path: '',
        },
      ],
    },
    {
      name: 'Company',
      links: [
        {
          name: 'About',
          path: '',
        },
        {
          name: 'Team',
          path: '',
        },
        {
          name: 'Blog',
          path: '',
        },
        {
          name: 'Careers',
          path: '',
        },
      ],
    },

    {
      name: 'Connect',
      links: [
        {
          name: 'Contact',
          path: '',
        },
        {
          name: 'Newsletter',
          path: '',
        },
        {
          name: 'LinkedIn',
          path: '',
        },
      ],
    },
  ];

  identifyLink(index: number, link: LinkGroup) {
    return link.name;
  }
}
