import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuildingsPageRoutingModule } from './buildings-routing.module';

import { BuildingsPage } from './buildings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuildingsPageRoutingModule
  ],
  declarations: [BuildingsPage]
})
export class BuildingsPageModule {}
