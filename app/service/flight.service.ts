import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Flight} from '../model/flight.model';
import {Observable} from 'rxjs';

@Injectable()
export class FlightService {
  constructor(private http: HttpClient) {
}

baseUrl = 'http://avia.local/flight';

 getFlights(): Observable<Object> {
    return this.http.get(this.baseUrl);
  }

 getFlight(href: string): Observable<Object> {
    return this.http.get(this.baseUrl);
  }

 deleteFlight(flight: Flight) {
    if (confirm('Удалить?')) {
     return this.http.get(this.baseUrl + '/flight_delete/' + flight.flight_id);
    }
  }

    addOrUpdate(flight: Flight) {

    let options = {
    headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
    };
    let body = new URLSearchParams();
    body.set('flight_name', flight.flight_name);
    body.set('flight_town_start', flight.flight_town_start);
    body.set('flight_town_finish', flight.flight_town_finish);
    body.set('flight_price', flight.flight_price.toString());
    body.set('flight_time_start', flight.flight_time_start);
    body.set('flight_time_finish', flight.flight_time_finish);
    body.set('flight_time_travel', flight.flight_time_travel);

    if (flight.flight_id) {
      return this.http.post(this.baseUrl + '/flight_edit/' + flight.flight_id, body.toString(), options);
    } else {
      return this.http.post(this.baseUrl + '/flight_add/', body.toString(), options); 
    }
  }

  }