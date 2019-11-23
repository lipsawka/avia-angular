<?php

class Plane_model extends CI_Model {



	public function get_all (){

		$all_plane_array = array();
		$query = $this->db->get('plane');
		foreach ($query->result() as $row)
		{
        	array_push( $all_plane_array, $row);
        	//array($row->plane_id, $row->plane_name, $row->plane_place_comfort, $row->plane_place_business, $row->plane_place_econom)
		}	
		return $all_plane_array;
	}
	public function get($plan_id){

		$query = $this->db->select('*')->
		from('plane')->
		where('plane_id', $plan_id)->
		get();

		return $query->result();

	}

	public function plane_add($data){

		$add_data = array(
			'plane_name' => $data["plane_name"],
			'plane_place_comfort' => $data["plane_place_comfort"] ,
			'plane_place_business' => $data["plane_place_business"],
			'plane_place_econom' => $data["plane_place_econom"],
		);
		//var_dump($add_data);
		//$this->db->insert('plane', $add_data);
		//echo "okey";
		$this->db->set($add_data);
		$result = $this->db->insert('plane');
		return $result;
		
		// $sql = $this->db->set($add_data)->get_compiled_insert('plane');
		// echo $sql;

	}

	public function plane_delete($id){

			$this->db->where('plane_id', $id);
			$result = $this->db->delete('plane');
			return $result;
	}


	public function plane_edit($id, $data){
		// поля из даты

		$this->db->where('plane_id', $id);
		$result = $this->db->update('plane', $data); 
		return $result;
	}

	// public function get_name($plane_name){
	// 	$query = $this->db->select('plane_id')->
	// 	from('plane')->
	// 	where('plane_name', $plan_name)->
	// 	get();

	// 	return $query->result();
		
	// }
}