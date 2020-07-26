import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './@core/guards/auth-guard-service'
export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./pages/pages.module')
      .then(m => m.PagesModule),
      canActivate: [AuthGuardService]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module')
    .then(m => m.AuthModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/public/public.module')
    .then(m => m.PublicModule)
  },
  // { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
