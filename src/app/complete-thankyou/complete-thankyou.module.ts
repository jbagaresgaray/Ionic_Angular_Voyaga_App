import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompleteThankyouPageRoutingModule } from './complete-thankyou-routing.module';

import { CompleteThankyouPage } from './complete-thankyou.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompleteThankyouPageRoutingModule
  ],
  declarations: [CompleteThankyouPage]
})
export class CompleteThankyouPageModule {}
