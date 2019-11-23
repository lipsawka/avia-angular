<?php

class Flight_model extends CI_Model {



	public function get_all (){

		$all_flight_array = array();
		$query = $this->db->get('flight');
		foreach ($query->result() as $row)
		{
        	array_push( $all_flight_array, $row);
        	//array($row->plane_id, $row->plane_name, $row->plane_place_comfort, $row->plane_place_business, $row->plane_place_econom)
		}	
		return $all_flight_array;
	}
	public function get($plan_id){

		$query = $this->db->select('*')->
		from('flight')->
		where('flight_id', $plan_id)->
		get();

		return $query->result();

	}

	public function flight_add($data){

		$add_data = array(
			'flight_name' => $data["flight_name"],
			'flight_town_start' => $data["flight_town_start"] ,
			'flight_town_finish' => $data["flight_town_finish"],
			'flight_price' => $data["flight_price"],
			'flight_time_start' => $data["flight_time_start"],
			'flight_time_finish' => $data["flight_time_finish"],
			'flight_time_travel' => $data["flight_time_travel"],
		);
		//var_dump($add_data);
		//$this->db->insert('plane', $add_data);
		//echo "okey";
		$this->db->set($add_data);
		$result = $this->db->insert('flight');
		return $result;
		
		// $sql = $this->db->set($add_data)->get_compiled_insert('plane');
		// echo $sql;

	}

	public function flight_delete($id){

			$this->db->where('flight_id', $id);
			$result = $this->db->delete('flight');
			return $result;
	}


	public function flight_edit($id, $data){
		// поля 
		$this->db->where('flight_id', $id);
		$result = $this->db->update('flight', $data); 
		return $result;
	}

	// public function get_name($flight_name){
	// 	$query = $this->db->select('flight_id')->
	// 	from('flight')->
	// 	where('flight_name', $flight_name)->
	// 	get();

	// 	return $query->result();
		
	// }

}