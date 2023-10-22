import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    HomeComponent
  ],
  exports: [
    LandingPageComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SectionsModule { }
