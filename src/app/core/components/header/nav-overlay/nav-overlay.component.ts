import {
  ChangeDetectionStrategy,
  Component,
  Input,
  QueryList,
  ViewChildren
} from '@angular/core';
import { LinkGroup } from '@blogrs/models/link-group.model';
import { ZippyComponent } from '@blogrs/shared/zippy/zippy.component';

@Component({
  selector: 'lbk-nav-overlay',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './nav-overlay.component.html',
})
export class NavOverlayComponent {
  @Input() linkGroups!: LinkGroup[];
  @Input() open!: boolean;

  @ViewChildren(ZippyComponent) zippyList!: QueryList<ZippyComponent>;

  toggle(zippyClosed: ZippyComponent) {

    this.zippyList.forEach((zippy) => {
      if (zippyClosed.contentId === zippy.contentId) return;

      if (zippy.expanded) {
        zippy.expanded = false;
        zippy.maskForCheck();
      }
    });
  }

  contentClass(expanded: boolean) {
    return {
      'p-0 mt-0 gap-0 ': !expanded,
    };
  }
}
