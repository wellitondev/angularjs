import { NewMomentComponent } from './componentes/pages/new-moment/new-moment.component';
import { AboutComponent } from './componentes/pages/about/about.component';
import { HomeComponent } from './componentes/pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path:'', component: HomeComponent},
 {path:'about', component: AboutComponent},
 {path:'moments/new', component:  NewMomentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
