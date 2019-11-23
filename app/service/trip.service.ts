import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Trip} from '../model/trip.model';
import {Observable} from 'rxjs';

@Injectable()
export class TripService {
  constructor(private http: HttpClient) {
  }

  baseUrl = 'http://avia.local/trip';



 getTrips(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }

 getTrip(href: string): Observable<Object> {
    return this.http.get(this.baseUrl);
  }

 deleteTrip(trip: Trip) {
    if (confirm('Удалить?')) {
      return this.http.get(this.baseUrl + '/trip_delete/' + trip.trip_id);
    }
  }


 addOrUpdate(trip: Trip) {
    let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };
    let body = new URLSearchParams();
    body.set('plane_id', trip.plane.plane_id.toString());
    body.set('plane_name', trip.plane.plane_name);
    body.set('flight_id', trip.flight.flight_id.toString());
    body.set('trip_date', trip.trip_date);


    if (trip.trip_id) {
      return this.http.post(this.baseUrl + '/trip_edit/' + trip.trip_id, body.toString(), options); 
    } else {
      return this.http.post(this.baseUrl + '/trip_add/', body.toString(), options); 
    }
 }  

}

