import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkGroup } from '@blogrs/models/link-group.model';
import * as fromData from '@blogrs/shared/data';
import {
  zoomInDownOnEnterAnimation,
  zoomOutUpOnLeaveAnimation
} from 'angular-animations';

@Component({
  selector: 'lbk-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="absolute top-0 left-0 w-full pt-14 z-50">
      <div class="container">
        <nav class="flex justify-between items-center">
          <lbk-logo></lbk-logo>
          <!-- hamburger -->
          <lbk-menu (click)="toggleNav()" [open]="openNavOverlay"></lbk-menu>
          <!-- hamburger -->
        </nav>

        <lbk-nav-overlay
          *ngIf="openNavOverlay"
          @zoomInDownOnEnter
          @zoomOutUpOnLeave
          [linkGroups]="linkGroups"
          class="block mt-9"
        ></lbk-nav-overlay>
      </div>
    </header>
  `,
  animations: [zoomInDownOnEnterAnimation(), zoomOutUpOnLeaveAnimation()],
})
export class HeaderComponent {
  openNavOverlay = false;
  linkGroups: LinkGroup[] = fromData.linkGroups;

  toggleNav() {
    this.openNavOverlay = !this.openNavOverlay;
  }
}
