import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      // TODO : add guard later
      { path: 'dashboard', canActivate: [], loadChildren: () => import(`./features/dashboard/dashboard.module`).then(m => m.DashboardModule) },
      { path: 'auth', loadChildren: () => import(`./features/auth/auth.module`).then(m => m.AuthModule) },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
