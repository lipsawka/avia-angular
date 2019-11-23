import {Plane} from './plane.model';
import {Flight} from './flight.model';

export class Trip{
	_links;
	trip_id: number;
	trip_date: string;
	plane: Plane;
	flight: Flight;
}