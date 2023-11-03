import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'restaurantes',
    pathMatch: 'full'
  },
  {
    path: 'restaurantes',
    children:
      [
        {
          path: "",
          loadChildren: () => import('./restaurantes/restaurantes.module').then(m => m.RestaurantesPageModule)
        },
        {
          path: ":restID",
          loadChildren: () => import('./restaurantes/rest-detail/rest-detail.module').then(m => m.RestDetailPageModule)
        }


      ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
