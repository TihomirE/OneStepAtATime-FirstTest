import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/layout/main-layout.component';

// const routes: Routes = [
//   {
//     path: '', redirectTo: 'folder/Inbox', pathMatch: 'full'
//   },
//   {
//     path: 'folder/:id', loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
//   }
// ];

const routes: Routes = [
  {
      path: '', component: AppComponent,
      children: [
          { path: '', redirectTo: 'auth', pathMatch: 'full' },
          { path: 'auth', loadChildren: () => import('./solutions/auth/auth.module').then(m => m.AuthModule) },
          {
              path: 'app', component: MainLayoutComponent,
              children: [
                  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                  { path: 'dashboard', loadChildren: () => import('./solutions/dashboard/dashboard.module').then(m => m.DashboardModule) }, // , canActivate: [AuthGuard]
              ]
          },
      ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
