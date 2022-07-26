import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowLocationPage } from './allow-location.page';

const routes: Routes = [
  {
    path: '',
    component: AllowLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowLocationPageRoutingModule {}
