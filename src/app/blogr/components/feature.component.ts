import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Feature } from '@blogrs/models';

@Component({
  selector: 'lbk-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h2>{{ feature.name }}</h2>

    <p class="mt-4 text-sm text-black-800">
      {{ feature.description }}
    </p>
  `,
  styles: [
    `
      :host {
        @apply text-center xl:text-left;
      }
    `,
  ],
})
export class FeatureComponent {
  @Input() feature!: Feature;
}
