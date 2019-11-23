import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PlaneService} from '../service/plane.service';
import {Plane} from '../model/plane.model';

export interface DialogData {
  plane: Plane;
}

@Component({
  selector: 'app-dialog-plane',
  templateUrl: './dialog-plane.component.html',
  styleUrls: ['./dialog-plane.component.css']
})
export class DialogPlaneComponent implements OnInit {

	title;
	planes: Plane[];

	constructor( public dialogRef: MatDialogRef<DialogPlaneComponent>,
				 @Inject(MAT_DIALOG_DATA) public data: DialogData, private planeService: PlaneService) { }

  ngOnInit() {
  		if (!this.data.plane) {
	      this.data.plane = new Plane();
	      this.title = 'Добавить Самолет';
	    } else {
	      this.title = 'Сохранить';
	    }
  }

  	onNoClick(): void {
      this.dialogRef.componentInstance.dialogRef.close(this.data);
    }

    onYesClick(): void {
      this.planeService.addOrUpdate(this.data.plane).subscribe();
      this.dialogRef.componentInstance.dialogRef.close(this.data);
    }
}
