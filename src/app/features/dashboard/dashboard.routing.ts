import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        // TODO : make sure to add route guard later in here can activate array.
        path: '', component: DashboardComponent, canActivate: [], children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'job-request', loadChildren: () => import(`../request/request.module`).then(m => m.RequestModule) },
            { path: '**', redirectTo: 'home' }
        ]
    }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
