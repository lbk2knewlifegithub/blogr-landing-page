import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lbk-infrastructure',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section
      class="relative bg-gradient-to-br from-[#2D2E40] to-[#3F4164] rounded-bl-[100px] rounded-tr-[100px]"
    >
      <!-- phones -->
      <img
        class="absolute top-0  left-1/2 -translate-x-1/2 -translate-y-[45%] z-30 max-w-[375px]  md:max-w-[472px] xl:left-0 xl:max-w-none xl:translate-x-[23%] xl:-translate-y-[15%]"
        src="/assets/images/illustration-phones.svg"
        alt="Phones"
      />
      <!-- end phones -->

      <div
        class="relative overflow-hidden rounded-bl-[100px] rounded-tr-[100px]  grid place-items-center text-center pt-56 pb-24 px-6 sm:px-8  z-10 md:pt-72 xl:grid-cols-2 xl:py-[111px] xl:px-0"
      >
        <!-- circle -->
        <img
          class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] xl:left-0 xl:-translate-x-[30%] z-[-1] max-w-[1014px]"
          src="/assets/images/bg-pattern-circles.svg"
          alt="Phones"
        />
        <!-- end circle -->

        <div class="hidden xl:block"></div>

        <div class="max-w-xl text-center xl:text-left">
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
