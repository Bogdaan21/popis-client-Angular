import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtikalComponent } from './components/artikal/artikal.component';
import { ArtikalpostputComponent } from './components/artikalpostput/artikalpostput.component';
import { ImenikComponent } from './components/imenik/imenik.component';

const routes: Routes = [
  { path: 'pocetnastrana', component: HomeComponent }, // path:'home' (dodatak u url /home), HomeComponent (sta otvara kad udjes na URL)
  { path: 'artikal', component: ArtikalComponent },
  { path: 'unesiartikal', component: ArtikalpostputComponent },
  { path: 'urediartikal/:aid', component: ArtikalpostputComponent },
  { path: 'imenik', component: ImenikComponent }  
];

//PROMJENA PORTA U ANGULAR, ng serve --port=(zeljeni port) 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
