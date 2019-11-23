import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FlightService} from '../service/flight.service';
import {Flight} from '../model/flight.model';

export interface DialogData {
  flight: Flight;
}

@Component({
  selector: 'app-dialog-flight',
  templateUrl: './dialog-flight.component.html',
  styleUrls: ['./dialog-flight.component.css']
})
export class DialogFlightComponent implements OnInit {

	title;
	flights: Flight[];

	constructor( public dialogRef: MatDialogRef<DialogFlightComponent>,
				 @Inject(MAT_DIALOG_DATA) public data: DialogData, private flightService: FlightService) { }

  ngOnInit() {
  	if (!this.data.flight) {
	      this.data.flight = new Flight();
	      this.title = 'Добавить Рейс';
	} else {
	  this.title = 'Сохранить';
	}
  }

    onNoClick(): void {
      this.dialogRef.componentInstance.dialogRef.close(this.data);
    }

    onYesClick(): void {
      this.flightService.addOrUpdate(this.data.flight).subscribe();
      this.dialogRef.componentInstance.dialogRef.close(this.data);
    }

}
