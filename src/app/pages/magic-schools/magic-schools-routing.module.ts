import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MagicSchoolsPage } from './magic-schools.page';

const routes: Routes = [
  {
    path: '',
    component: MagicSchoolsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicSchoolsPageRoutingModule {}
