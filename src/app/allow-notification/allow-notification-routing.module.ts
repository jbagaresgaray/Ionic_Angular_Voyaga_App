import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllowNotificationPage } from './allow-notification.page';

const routes: Routes = [
  {
    path: '',
    component: AllowNotificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllowNotificationPageRoutingModule {}
