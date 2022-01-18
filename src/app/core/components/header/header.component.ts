import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LinkGroup } from '@blogrs/models/link-group.model';
import { listAnimation } from '@blogrs/shared';
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
          <div class="flex items-center xl:gap-16">
            <lbk-logo></lbk-logo>

            <!-- links header desktop -->
            <div class="hidden xl:block">
              <lbk-links-dropdown
                @listAnimation
                [linkGroups]="linkGroups"
              ></lbk-links-dropdown>
            </div>
            <!-- end links header desktop -->
          </div>

          <div class="space-x-6 hidden xl:block">
            <a
              class="font-medium font-ubuntu text-white duration-500 hover:underline"
              routerLink="/"
              >Login</a
            >

            <a class="btn btn-basic !px-10" routerLink="/">Sign Up</a>
          </div>

          <!-- hamburger -->
          <lbk-menu
            class="xl:hidden"
            (click)="toggleNav()"
            [open]="openNavOverlay"
          ></lbk-menu>
          <!-- hamburger -->
        </nav>

        <lbk-nav-overlay
          *ngIf="openNavOverlay"
          @zoomInDownOnEnter
          @zoomOutUpOnLeave
          [linkGroups]="linkGroups"
          class="block mt-9 max-w-xs mx-auto xl:hidden"
        ></lbk-nav-overlay>
      </div>
    </header>
  `,
  animations: [
    zoomInDownOnEnterAnimation(),
    zoomOutUpOnLeaveAnimation(),
    listAnimation('lbk-dropdown'),
  ],
})
export class HeaderComponent {
  openNavOverlay = false;
  linkGroups: LinkGroup[] = fromData.linkGroups;

  toggleNav() {
    this.openNavOverlay = !this.openNavOverlay;
  }
}
