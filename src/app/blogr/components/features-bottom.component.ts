import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Feature, Image } from '@blogrs/models';

@Component({
  selector: 'lbk-features-bottom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container grid place-items-center xl:grid-cols-2">
      <lbk-responsive-image
        class="mt-10 xl:-translate-x-[28%] xl:min-w-[880px]"
        [image]="illustration"
      ></lbk-responsive-image>

      <div class="mt-12 max-w-xl grid gap-10 md:gap-16">
        <ng-container *ngFor="let feature of features">
          <lbk-feature [feature]="feature"></lbk-feature>
        </ng-container>
      </div>
    </section>
  `,
})
export class FeaturesBottomComponent {
  illustration: Image = {
    mobile: '/assets/images/illustration-laptop-mobile.svg',
    tablet: '/assets/images/illustration-laptop-mobile.svg',
    desktop: '/assets/images/illustration-laptop-desktop.svg',
    alt: 'Illustration',
  };

  features: Feature[] = [
    {
      name: 'Free, open, simple',
      description:
        ' Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.',
    },
    {
      name: 'Powerful tooling',
      description:
        ' Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.',
    },
  ];
}
