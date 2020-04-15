import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BinnacleComponent } from './components/binnacle/binnacle.component';
import { OperatorsComponent } from './components/operators/operators.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'binnacle', component: BinnacleComponent },
  { path: 'operators', component: OperatorsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
