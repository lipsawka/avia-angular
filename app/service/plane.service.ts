import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Plane} from '../model/plane.model';
import {Observable} from 'rxjs';

@Injectable()
export class PlaneService {
  constructor(private http: HttpClient) {
}

baseUrl = 'http://avia.local/plane';

 getPlanes(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }

 getPlane(href: string): Observable<Object> {
    return this.http.get(this.baseUrl);
  }


  deletePlane(plane: Plane) {
    if (confirm('Удалить?')) {
      return this.http.get(this.baseUrl + '/plane_delete/' + plane.plane_id);
    }
  }

    addOrUpdate(plane: Plane) {
    let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };
    let body = new URLSearchParams();
    body.set('plane_name', plane.plane_name);
    body.set('plane_place_comfort', plane.plane_place_comfort.toString());
    body.set('plane_place_business', plane.plane_place_business.toString());
    body.set('plane_place_econom', plane.plane_place_econom.toString());

    if (plane.plane_id) {
      return this.http.post(this.baseUrl + '/plane_edit/' + plane.plane_id, body.toString(), options); 
    } else {
      return this.http.post(this.baseUrl + '/plane_add/', body.toString(), options); 
    }
  }

  }