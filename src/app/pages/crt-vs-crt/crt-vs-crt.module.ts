import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrtVsCrtPageRoutingModule } from './crt-vs-crt-routing.module';

import { CrtVsCrtPage } from './crt-vs-crt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrtVsCrtPageRoutingModule
  ],
  declarations: [CrtVsCrtPage]
})
export class CrtVsCrtPageModule {}
