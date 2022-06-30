import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent }, // path:'home' (dodatak u url /home), HomeComponent (gdje ga preusmjeravas kad udjes na URL)
];

//PROMJENA PORTA U ANGULAR, ng serve --port=(zeljeni port) 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
