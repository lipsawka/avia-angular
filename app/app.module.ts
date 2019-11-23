import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FlightService} from './service/flight.service';
import {PlaneService} from './service/plane.service';
import {TripService} from './service/trip.service';

import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatDialog,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatIconModule
} from '@angular/material';
import { MatToolbarModule} from '@angular/material/toolbar';
import { PlaneComponent } from './plane/plane.component';
import { FlightComponent } from './flight/flight.component';
import { HeaderComponent} from './header/header.component';
import { DialogPlaneComponent } from './dialog-plane/dialog-plane.component';
import { DialogTripComponent } from './dialog-trip/dialog-trip.component';
import { DialogFlightComponent } from './dialog-flight/dialog-flight.component';
import { MainComponent } from './main/main.component';
import { TripComponent } from './trip/trip.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponent,
    FlightComponent,
    HeaderComponent,
    DialogPlaneComponent,
    DialogTripComponent,
    DialogFlightComponent,
    MainComponent,
    TripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule
  ],
  entryComponents: [ DialogPlaneComponent, DialogFlightComponent, DialogTripComponent],
  providers: [FlightService, PlaneService, TripService, MatDialog],
  bootstrap: [AppComponent]
})
export class AppModule {
}