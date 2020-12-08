import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WellComePageComponent} from './well-come-page/well-come-page.component';
import {DocktorComponent} from './docktor/docktor.component';
import {HastaComponent} from './hasta/hasta.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: WellComePageComponent},
  {path: 'doctor', component: DocktorComponent},
  {path: 'hasta', component: HastaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
