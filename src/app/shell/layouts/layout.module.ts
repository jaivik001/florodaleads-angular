import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellModule } from '../shell.module';

const routes: Routes = [];


@NgModule({
  declarations: [
    AppLayoutComponent,
  ],
  imports: [
    CommonModule,
    ShellModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    AppLayoutComponent
  ]
})
export class LayoutModule { }
