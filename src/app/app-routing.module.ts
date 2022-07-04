import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtikalComponent } from './components/artikal/artikal.component';

const routes: Routes = [
  { path: 'pocetnastrana', component: HomeComponent }, // path:'home' (dodatak u url /home), HomeComponent (gdje ga preusmjeravas kad udjes na URL)
  { path: 'artikal', component: ArtikalComponent },
];

//PROMJENA PORTA U ANGULAR, ng serve --port=(zeljeni port) 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
