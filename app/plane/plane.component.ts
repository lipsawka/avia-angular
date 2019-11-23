import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DialogPlaneComponent} from '../dialog-plane/dialog-plane.component';
import {Plane} from '../model/plane.model';
import {PlaneService} from '../service/plane.service';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit {
	@ViewChild(MatSort, {static: true}) sort: MatSort;
	@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
	datasource;
	displayedColumns = ['plane_name', 'plane_place_comfort',  'plane_place_business', 'plane_place_econom', 'actions', 'actions2'];
	plane: Plane;
	planes: Plane[];

  constructor(private router: Router, private planeService: PlaneService, public dialog: MatDialog) { }

  	openDialog(): void {
      const dialogRef = this.dialog.open(DialogPlaneComponent, {
        width: '300px',
        data: {plane: this.plane}
      });
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
      this.plane = null;
    }

  ngOnInit() {
	this.planeService.getPlanes().subscribe((data: any) => {
	this.planes = data;
	this.datasource = new MatTableDataSource(this.planes);
	this.datasource.sort = this.sort;
	this.datasource.paginator = this.paginator;
  });
  }

  onClickDelete(plane: Plane): void {
  	this.planeService.deletePlane(plane).subscribe(data => {
    this.ngOnInit();
  });
  }

  onClickUpdate(plane: Plane): void {
      this.plane = plane;
      this.openDialog();
  }

}
