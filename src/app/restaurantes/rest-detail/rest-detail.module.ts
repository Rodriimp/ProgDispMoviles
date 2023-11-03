import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestDetailPageRoutingModule } from './rest-detail-routing.module';

import { RestDetailPage } from './rest-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestDetailPageRoutingModule
  ],
  declarations: [RestDetailPage]
})
export class RestDetailPageModule {}
