import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'landing-page',
    loadChildren: () => import('./landing-page/landing-page.module').then( m => m.LandingPagePageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'email-verify',
    loadChildren: () => import('./email-verify/email-verify.module').then( m => m.EmailVerifyPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'allow-location',
    loadChildren: () => import('./allow-location/allow-location.module').then( m => m.AllowLocationPageModule)
  },
  {
    path: 'allow-notification',
    loadChildren: () => import('./allow-notification/allow-notification.module').then( m => m.AllowNotificationPageModule)
  },
  {
    path: 'complete-thankyou',
    loadChildren: () => import('./complete-thankyou/complete-thankyou.module').then( m => m.CompleteThankyouPageModule)
  },
  {
    path: 'complete-profile',
    loadChildren: () => import('./complete-profile/complete-profile.module').then( m => m.CompleteProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
