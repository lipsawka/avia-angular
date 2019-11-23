import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DialogTripComponent} from '../dialog-trip/dialog-trip.component';
import {Trip} from '../model/trip.model';
import {PlaneService} from '../service/plane.service';
import {FlightService} from '../service/flight.service';
import {TripService} from '../service/trip.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

@ViewChild(MatSort, {static: true}) sort: MatSort;
	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	datasource;
	displayedColumns = ['plane_name', 'flight_name',  'trip_date',  'actions', 'actions2'];
	trip: Trip;
	trips: Trip[];

  constructor(private router: Router, private planeService: PlaneService, private tripService: TripService, private flightService: FlightService, public dialog: MatDialog) { }

openDialog(): void {
  const dialogRef = this.dialog.open(DialogTripComponent, {
    width: '400px',
    data: {trip: this.trip}
  });
  dialogRef.afterClosed().subscribe(result => {
    this.ngOnInit();
  });
  this.trip = null;
}

  ngOnInit() {
	this.tripService.getTrips().subscribe((data: any) => {
	this.trips = data;
	this.datasource = new MatTableDataSource(this.trips);
	this.datasource.sort = this.sort;
	this.datasource.paginator = this.paginator;
  });
  }

  onClickDelete(trip: Trip): void {
  	this.tripService.deleteTrip(trip).subscribe(data => {
    this.ngOnInit();
  });
  }

  onClickUpdate(trip: Trip): void {
      this.trip = trip;
      this.openDialog();
  }

}
