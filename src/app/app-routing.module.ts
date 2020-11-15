import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './core/guards/authentication.guard';


const routes: Routes = [
  {
    path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', canActivate: [AuthGuard], loadChildren: () => import(`./features/dashboard/dashboard.module`).then(m => m.DashboardModule) },
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
