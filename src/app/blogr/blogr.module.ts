import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogrRoutingModule } from './blogr-routing.module';
import { COMPONENTS } from './components';
import { CONTAINERS } from './containers';

@NgModule({
  imports: [CommonModule, BlogrRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
  providers: [],
})
export class BlogrModule {}
