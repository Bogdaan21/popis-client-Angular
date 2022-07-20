import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ArtikalComponent } from './components/artikal/artikal.component';
import { ArtikalpostputComponent } from './components/artikalpostput/artikalpostput.component';
import { ImenikComponent } from './components/imenik/imenik.component';
import { ImenikpostpustComponent } from './components/imenikpostpust/imenikpostpust.component';
import { HomepostputComponent } from './components/homepostput/homepostput.component';

const routes: Routes = [
  { path: 'direktorat', component: HomeComponent }, // path:'home' (dodatak u url /home), HomeComponent (sta otvara kad udjes na URL)
  { path: 'uredidirektorat/:direktoratid', component: HomepostputComponent},
  { path: 'unesidirektorat', component: HomepostputComponent}, // sa namjerom iskljuceno. Iskljuceno i u headeru-u.
  { path: 'artikal', component: ArtikalComponent },
  { path: 'unesiartikal', component: ArtikalpostputComponent },
  { path: 'urediartikal/:aid', component: ArtikalpostputComponent },
  { path: 'imenik', component: ImenikComponent },
  { path: 'unesikontakta', component: ImenikpostpustComponent}, // sa namjerom iskljuceno. Iskljuceno i u headeru-u.
  { path: 'urediimenik/:imenikid', component: ImenikpostpustComponent },
];

//PROMJENA PORTA U ANGULAR, ng serve --port=(zeljeni port) 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
