<?php

class Trip_model extends CI_Model {



	public function get_all (){

	$all_trip_array = array();


	$query = $this->db->select('trip.trip_id, plane.plane_id, plane.plane_name, flight.flight_id, flight.flight_name, trip.trip_date')->from('trip')
	->join('plane', 'plane.plane_id = trip.plane_id', 'left')
	->join('flight', 'flight.flight_id = trip.flight_id', 'left')->get();
	//echo $query;// SELECT `trip`.`trip_id`,  `plane`.`plane_id`, `plane`.`plane_name`, `flight`.`flight_id`, `flight`.`flight_name`, `trip`.`trip_date` FROM `trip` LEFT JOIN `plane` ON `plane`.`plane_id` = `trip`.`plane_id` LEFT JOIN `flight` ON `flight`.`flight_id` = `trip`.`flight_id`

		foreach ($query->result() as $row)
		{	
			$flight_arr = array();
			$plane_arr = array();
			
			$flight_arr['flight_id'] = $row->flight_id;
			$flight_arr['flight_name'] = $row->flight_name;
			$plane_arr['plane_id'] = $row->plane_id;
			$plane_arr['plane_name'] = $row->plane_name;
       		array_push( $all_trip_array, array("trip_id" => $row->trip_id, "trip_date" => $row->trip_date, "plane" => $plane_arr, "flight" => $flight_arr));
		}	
		
		return $all_trip_array;

	}
	public function get($trip_id){

		$query = $this->db->select('*')->
		from('plane')->
		where('plane_id', $plan_id)->
		get();

		return $query->result();

	}

	public function trip_add($data){



		$add_data = array(
			'plane_id' => $data["plane_id"],
			'flight_id' => $data["flight_id"] ,
			'trip_date' => $data["trip_date"],
		);
		$this->db->set($add_data);
		$result = $this->db->insert('trip');
		return $result;

	}

	public function trip_delete($id){

			$this->db->where('trip_id', $id);
			$result = $this->db->delete('trip');
			return $result;
	}


	public function trip_edit($id, $data){

		$this->db->where('trip_id', $id);
		$result = $this->db->update('trip', $data); 
		return $result;
	}


}