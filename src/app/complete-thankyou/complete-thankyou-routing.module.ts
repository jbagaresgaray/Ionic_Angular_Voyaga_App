import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompleteThankyouPage } from './complete-thankyou.page';

const routes: Routes = [
  {
    path: '',
    component: CompleteThankyouPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompleteThankyouPageRoutingModule {}
