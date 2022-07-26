import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailVerifyPage } from './email-verify.page';

const routes: Routes = [
  {
    path: '',
    component: EmailVerifyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmailVerifyPageRoutingModule {}
