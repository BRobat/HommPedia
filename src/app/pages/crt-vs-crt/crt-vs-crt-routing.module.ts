import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrtVsCrtPage } from './crt-vs-crt.page';

const routes: Routes = [
  {
    path: '',
    component: CrtVsCrtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrtVsCrtPageRoutingModule {}
