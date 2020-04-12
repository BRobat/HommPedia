import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MagicSchoolsPageRoutingModule } from './magic-schools-routing.module';

import { MagicSchoolsPage } from './magic-schools.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MagicSchoolsPageRoutingModule
  ],
  declarations: [MagicSchoolsPage]
})
export class MagicSchoolsPageModule {}
