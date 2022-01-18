import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-intro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="relative bg-primary-gradient  rounded-bl-[100px] h-[600px] z-10 overflow-hidden grid place-content-center"
    >
      <img
        class="absolute inset-0 w-full h-full object-cover scale-[180%] z-[-1]"
        src="/assets/images/bg-pattern-intro-mobile.svg"
        alt="Pattern Intro mobile"
      />

      <div class="text-center text-white container">
        <h1 class="font-semibold text-xl leading-10 text-white">
          A modern <br />
          publishing platform
        </h1>

        <p class="px-8 mt-2">Grow your audience and build your online brand</p>

        <div class="space-x-4 mt-12">
          <a routerLink="/" class="btn btn-basic">Start for Free</a>
          <a routerLink="/" class="btn btn-outline">Learn More</a>
        </div>
      </div>
    </section>
  `,
  styles: [``],
})
export class IntroComponent {}
