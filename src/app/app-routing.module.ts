import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsRoutingModule } from './modules/sections/sections-routing.module';
import { LandingPageComponent } from './modules/sections/pages/landing-page/landing-page.component';

const routes: Routes = [
  {path: '**', redirectTo: ''} // después del redirectTo se tiene que poner el componente de 404 not found, pero aun no ha sido creado
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    SectionsRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
