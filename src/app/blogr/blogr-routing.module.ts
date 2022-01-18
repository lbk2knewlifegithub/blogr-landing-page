import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogrPageComponent } from './containers/blogr-page.component';

const routes: Routes = [{ path: '', component: BlogrPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogrRoutingModule {}
