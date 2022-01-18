import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-infrastructure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="relative">
      <!-- phones -->
      <img
        class="absolute top-0 left-0 -translate-y-[45%] z-30"
        src="/assets/images/illustration-phones.svg"
        alt="Phones"
      />
      <!-- end phones -->

      <div
        class="relative overflow-hidden bg-gradient-to-br from-[#2D2E40] to-[#3F4164] container text-center pt-56 pb-24 rounded-bl-[100px] rounded-tr-[100px] z-10"
      >
        <!-- circle -->
        <img
          class="absolute top-0 left-0 -translate-y-[20%] z-[-1] scale-150"
          src="/assets/images/bg-pattern-circles.svg"
          alt="Phones"
        />
        <!-- end circle -->

        <div class="z-20">
          <h2 class="text-2xl text-white">State of the Art Infrastructure</h2>

          <p class="text-sm text-white mt-2 font-light">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  `,
})
export class InfrastructureComponent {}
