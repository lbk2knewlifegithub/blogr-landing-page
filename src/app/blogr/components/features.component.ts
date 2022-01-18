import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-features',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="container">
      <h2>Designed for the future</h2>

      <img
        class="mt-10"
        src="/assets/images/illustration-editor-mobile.svg"
        alt="Illustration"
      />

      <div class="mt-12">
        <h2>
          Introducing an <br />
          extensible editor
        </h2>

        <p class="mt-4 text-sm text-black-800 text-center">
          Blogr features an exceedingly intuitive interface which lets you focus
          on one thing: creating content. The editor supports management of
          multiple blogs and allows easy manipulation of embeds such as images,
          videos, and Markdown. Extensibility with plugins and themes provide
          easy ways to add functionality or change the looks of a blog.
        </p>
      </div>

      <div class="mt-10">
        <h2>
          Robust content <br />
          management
        </h2>
        <p class="mt-4 text-sm text-black-800 text-center">
          Flexible content management enables users to easily move through
          posts. Increase the usability of your blog by adding customized
          categories, sections, format, or flow. With this functionality, you’re
          in full control.
        </p>
      </div>
    </section>
  `,
})
export class FeaturesComponent {}
