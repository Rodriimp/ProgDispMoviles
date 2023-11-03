import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantesPage } from './restaurantes.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantesPage
  },
  {
    path: 'rest-detail',
    loadChildren: () => import('./rest-detail/rest-detail.module').then( m => m.RestDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantesPageRoutingModule {}
