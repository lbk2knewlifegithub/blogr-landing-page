import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'lbk-features-two',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container">
      <img
        class="max-w-[328px]"
        src="/assets/images/illustration-laptop-mobile.svg"
        alt="Illustration"
      />

      <div class="mt-12">
        <h2>Free, open, simple</h2>


        <p class="mt-4 text-sm text-black-800 text-center">
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
      </div>

      <div class="mt-10">
        <h2>Powerful tooling</h2>
        <p class="mt-4 text-sm text-black-800 text-center">
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </section>
  `,
})
export class FeaturesTwoComponent {}
