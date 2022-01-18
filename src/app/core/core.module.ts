import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DropDownModule } from '@blogrs/shared';
import { ZippyModule } from '@blogrs/shared/zippy';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';

@NgModule({
  imports: [CommonModule, RouterModule, ZippyModule, DropDownModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CoreModule {}
