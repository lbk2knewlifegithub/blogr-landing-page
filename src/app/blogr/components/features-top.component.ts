import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Feature, Image } from '@blogrs/models';

@Component({
  selector: 'lbk-features-top',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container ">
      <h2 class="text-center md:text-lg">Designed for the future</h2>

      <div class="grid place-items-center xl:grid-cols-2">
        <lbk-responsive-image
          class="mt-10 xl:order-last xl:translate-x-[27%] xl:min-w-[880px]"
          [image]="illustration"
        ></lbk-responsive-image>

        <div class="mt-12 max-w-xl grid gap-10 md:gap-16">
          <ng-container *ngFor="let feature of features">
            <lbk-feature [feature]="feature"></lbk-feature>
          </ng-container>
        </div>
      </div>
    </section>
  `,
})
export class FeaturesComponent {
  illustration: Image = {
    mobile: 'assets/images/illustration-editor-mobile.svg',
    tablet: 'assets/images/illustration-editor-mobile.svg',
    desktop: 'assets/images/illustration-editor-desktop.svg',
    alt: 'Illustration',
  };

  features: Feature[] = [
    {
      name: 'Introducing an extensible editor',
      description:
        ' Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.',
    },
    {
      name: 'Robust content management',
      description:
        'Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.',
    },
  ];
}
