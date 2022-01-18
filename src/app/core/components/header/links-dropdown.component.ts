import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { LinkGroup } from '@blogrs/models/link-group.model';

@Component({
  selector: 'lbk-links-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container *ngFor="let linkGroup of linkGroups">
      <lbk-dropdown>
        <button dropDownToggle class="flex gap-2 items-center p-2">
          <span class="text-white">{{ linkGroup.name }}</span>
          <img
            class="duration-300"
            src="/assets/images/icon-arrow-light.svg"
            alt="Arrow"
          />
        </button>

        <ng-template dropDownContent>
          <div
            class="grid gap-5 bg-white text-center p-6 rounded-md duration-500"
          >
            <ng-container *ngFor="let link of linkGroup.links">
              <a
                class="duration-500 hover:text-primary-900"
                [routerLink]="link.path"
                >{{ link.name }}</a
              >
            </ng-container>
          </div>
        </ng-template>
      </lbk-dropdown>
    </ng-container>
  `,
  styles: [
    `
      :host {
        @apply flex gap-6 items-center;
      }
    `,
  ],
  animations: [
  ],
})
export class LinksDropdownComponent {
  @Input() linkGroups!: LinkGroup[];
}
