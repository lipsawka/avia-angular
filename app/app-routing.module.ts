import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent}   from './main/main.component';
import {PlaneComponent}   from './plane/plane.component';
import {FlightComponent}   from './flight/flight.component';
import {TripComponent}   from './trip/trip.component';


const routes: Routes = [
	{ path: '', component: MainComponent},
	{ path: 'plane', component: PlaneComponent},
	{ path: 'flight', component: FlightComponent},
	{ path: 'trip', component: TripComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
