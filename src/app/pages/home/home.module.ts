import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from 'src/app/shell/layouts/app-layout/app-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from 'src/app/shell/layouts/layout.module';
import { LinkDirective } from 'src/app/shared/directive/link.directive';
import { McaLeadsComponent } from './mca-leads/mca-leads.component';
import { MortgageLeadesComponent } from './mortgage-leades/mortgage-leades.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'mca-leads', component: McaLeadsComponent },
      { path: 'mortgage-leads', component: MortgageLeadesComponent },
      { path: 'contact', component: ContactComponent }
    ]
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    McaLeadsComponent,
    MortgageLeadesComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    LayoutModule,
  ]
})
export class HomeModule { }
