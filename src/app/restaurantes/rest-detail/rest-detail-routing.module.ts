import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestDetailPage } from './rest-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestDetailPageRoutingModule {}
