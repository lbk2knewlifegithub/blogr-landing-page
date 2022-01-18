import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinkGroup } from '@blogrs/models/link-group.model';

@Component({
  selector: 'lbk-links-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngFor="let linkGroup of linkGroups">
      <div class="text-white">
        <p class="font-bold font-ubuntu">{{ linkGroup.name }}</p>

        <ul class="mt-5 space-y-4">
          <li *ngFor="let link of linkGroup.links">
            <a class="font-light animated-link" [routerLink]="link.path">
              {{ link.name }}
            </a>
          </li>
        </ul>
      </div>
    </ng-container>
  `,
  styles: [
    `
      :host {
        @apply grid gap-10 text-center  lg:grid-cols-3 lg:text-left lg:w-full;
      }
    `,
  ],
})
export class LinksFooterComponent {
  @Input() linkGroups!: LinkGroup[];
}
