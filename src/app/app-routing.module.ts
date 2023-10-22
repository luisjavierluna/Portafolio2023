import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './modules/sections/pages/landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent}, // PONERLE DE NOMBRE TAB "LUIS LUNA", PERO LA RUTA SI DIRÁ PORTFOLI
  {path: '**', redirectTo: ''}, // AQUÍ REDIRECCIONAR AL NOPAGEFOUND
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
