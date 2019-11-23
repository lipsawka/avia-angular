import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {TripService} from '../service/trip.service';
import {PlaneService} from '../service/plane.service';
import {FlightService} from '../service/flight.service';
import {Trip} from '../model/trip.model';
import {Plane} from '../model/plane.model';
import {Flight} from '../model/flight.model';

export interface DialogData {
  trip: Trip;
}

@Component({
  selector: 'app-dialog-trip',
  templateUrl: './dialog-trip.component.html',
  styleUrls: ['./dialog-trip.component.css']
})

export class DialogTripComponent implements OnInit {
  
   title;
   planes: Plane[];
   flights: Flight[];
   trips: Trip[];
   

	constructor( public dialogRef: MatDialogRef<DialogTripComponent>,
	@Inject(MAT_DIALOG_DATA) public data: DialogData, private flightService: FlightService, private planeService: PlaneService, private tripService: TripService) { }

  ngOnInit() {
    this.planeService.getPlanes().subscribe((data: any) => {
      this.planes = data;
    });
    this.flightService.getFlights().subscribe((data: any) => {
      this.flights = data;
    });
    if (!this.data.trip) {
	      this.data.trip = new Trip();
	      this.title = 'Добавить Вылет';
	    } else {
	      this.title = 'Сохранить';
	    }
  }

  	onNoClick(): void {
      this.dialogRef.componentInstance.dialogRef.close(this.data);
    }

    onYesClick(): void {
      this.tripService.addOrUpdate(this.data.trip).subscribe();
      this.dialogRef.componentInstance.dialogRef.close(this.data);
    }

   comparePlan(p1: Plane, p2: Plane): boolean {
    return p1 && p2 && p1.plane_id === p2.plane_id;
  }
  compareFlight(f1: Flight, f2: Flight): boolean {
    return f1 && f2 && f1.flight_id === f2.flight_id;
  }
}
