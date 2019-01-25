import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'home', component: LandingpageComponent },
  // { path: 'investor', loadChildren: '@app/investor/investor.module#InvestorModule' },
  // { path: 'sponsor', loadChildren: '@app/sponsor/sponsor.module#SponsorModule' },
  // { path: 'auditor', loadChildren: '@app/auditor/auditor.module#AuditorModule' },
  // { path: 'contractor', loadChildren: '@app/contractor/contractor.module#ContractorModule' },
  // { path: 'subcontractor', loadChildren: '@app/subcontractor/subcontractor.module#SubcontractorModule' },
  // { path: 'auth', loadChildren: '@app/auth/auth.module#AuthModule' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) ,
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
