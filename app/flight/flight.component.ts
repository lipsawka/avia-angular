import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DialogFlightComponent} from '../dialog-flight/dialog-flight.component';
import {Flight} from '../model/flight.model';
import {FlightService} from '../service/flight.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

	@ViewChild(MatSort, {static: true}) sort: MatSort;
	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	datasource;
	displayedColumns = [
	'flight_name', 
	'flight_town_start',  
	'flight_town_finish', 
	'flight_price', 
	'flight_time_start', 
	'flight_time_finish', 
	'flight_time_travel', 
	'actions', 
	'actions2'];

	flight: Flight;
	flights: Flight[];
  constructor(private router: Router, private flightService: FlightService, public dialog: MatDialog) { }

  openDialog(): void {
      const dialogRef = this.dialog.open(DialogFlightComponent, {
        width: '500px',
        data: {flight: this.flight}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
      this.flight = null;
  }

  ngOnInit() {
	this.flightService.getFlights().subscribe((data: any) => {
	this.flights = data;
	this.datasource = new MatTableDataSource(this.flights);
	this.datasource.sort = this.sort;
	this.datasource.paginator = this.paginator;
  });
  }

  onClickDelete(flight: Flight): void {
  	this.flightService.deleteFlight(flight).subscribe(data => {
    this.ngOnInit();
  });
  }

  onClickUpdate(flight: Flight): void {
      this.flight = flight;
      this.openDialog();
  }


}
