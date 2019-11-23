<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Trip extends CI_Controller {

	 // Инициализация
    function __construct()
    {
        parent::__construct();
        $this->load->model('Trip_model', 'trip');
        $this->load->model('Flight_model', 'flight');
        $this->load->model('Plane_model', 'plane');
    }

	public function index()
	{	
		$id = $this->input->get('id');
		if (is_null($id))
		{
			$trip = $this->trip->get_all();
		}
		else
		{
			$trip = $this->trip->get($id);
		}

		echo json_encode($trip);	

	}

	public function trip_add()
	{		
		//var_dump($_POST);
		$this->load->library('form_validation');
		// $Plane_name = $this->input->post('plane_name');
		// $Flight_name = $this->input->post('flight_name');

		// $plane_id = $this->plane->get_name($Plane_name);
		// var_dump($plane_id);
		// $flight_id = $this->flight->get_name($Flight_name);
		// var_dump($flight_id);
	 	$save_data  = array(
	 			'plane_id' =>  $this->input->post('plane_id'),
	 			'flight_id' => $this->input->post('flight_id'), 
	 			'trip_date' => $this->input->post('trip_date'),
	 	);
	 	
	 	$result = $this->trip->trip_add($save_data);
		echo json_encode($result);	
	 	//die();
	}


	public function trip_delete(){

		$id = $this->uri->segment(3, 0);
		$result = $this->trip->trip_delete($id);
		echo json_encode($result);	
	}

	public function trip_edit(){
		$id = $this->uri->segment(3, 0);

		// $Plane_name = $this->input->post('plane_name');
		// $Flight_name = $this->input->post('flight_name');

		// $plane_id = $this->plane->get_name($Plane_name);
		// //var_dump($plane_id);
		// $flight_id = $this->flight->get_name($Flight_name);
		// //var_dump($flight_id);

		$data  = array(
 			'plane_id' => $this->input->post('plane_id'),
 			'flight_id' => $this->input->post('flight_id'),
 			'trip_date' => $this->input->post('trip_date'),
	 	);
		$result = $this->trip->trip_edit($id, $data);
		echo json_encode($result);	

	}
}
