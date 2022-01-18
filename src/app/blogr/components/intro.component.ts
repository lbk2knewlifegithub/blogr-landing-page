import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Image } from '@blogrs/models';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      @fadeInOnEnter
      class="relative bg-primary-gradient  rounded-bl-[100px] h-[600px] z-10 overflow-hidden grid place-content-center"
    >
      <lbk-responsive-image
        class="absolute inset-0 w-full h-full object-cover scale-[180%] z-[-1] md:scale-[250%] xl:translate-x-[28%] xl:-translate-y-[180%]"
        [image]="pattern"
      ></lbk-responsive-image>

      <div class="text-center text-white container">
        <h1
          class="font-semibold text-xl leading-10 text-white md:text-2xl xl:text-3xl"
        >
          A modern publishing platform
        </h1>

        <p class="px-8 mt-2 md:text-[20px] xl:mt-8">
          Grow your audience and build your online brand
        </p>

        <div class="space-x-4 mt-12 md:mt-16 xl:mt-12">
          <a routerLink="/" class="btn btn-basic">Start for Free</a>
          <a routerLink="/" class="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  `,
  animations: [fadeInOnEnterAnimation()],
})
export class IntroComponent {
  pattern: Image = {
    mobile: 'assets/images/bg-pattern-intro-mobile.svg',
    tablet: 'assets/images/bg-pattern-intro-desktop.svg',
    desktop: 'assets/images/bg-pattern-intro-desktop.svg',
    alt: 'Pattern Intro mobile',
  };
}
