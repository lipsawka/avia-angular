<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Flight extends CI_Controller {

	 // Инициализация
    function __construct()
    {
        parent::__construct();
        $this->load->model('Flight_model', 'flight');
    }

	public function index()
	{	
		$id = $this->input->get('id');
		if (is_null($id))
		{
			$flight = $this->flight->get_all();
		}
		else
		{
			$flight = $this->flight->get($id);
		}

		echo json_encode($flight);	

	}

	public function flight_add()
	{		
		//var_dump($_POST);
		$this->load->library('form_validation');


		 	$save_data  = array(
		 			'flight_name' => $this->input->post('flight_name'),
		 			'flight_town_start' => $this->input->post('flight_town_start'),
		 			'flight_town_finish' => $this->input->post('flight_town_finish'),
		 			'flight_price' => $this->input->post('flight_price'),
		 			'flight_time_start' => $this->input->post('flight_time_start'),
		 			'flight_time_finish' => $this->input->post('flight_time_finish'),
		 			'flight_time_travel' => $this->input->post('flight_time_travel'),
		 	);
		 	
		 	$result = $this->flight->flight_add($save_data);
			echo json_encode($result);	
		 	//die();
		 

	}


	public function flight_delete(){

		$id = $this->uri->segment(3, 0);
		$result = $this->flight->flight_delete($id);
		echo json_encode($result);	

	}

	public function flight_edit(){

		$id = $this->uri->segment(3, 0);
		$data  = array(
 			'flight_name' => $this->input->post('flight_name'),
 			'flight_town_start' => $this->input->post('flight_town_start'),
 			'flight_town_finish' => $this->input->post('flight_town_finish'),
 			'flight_price' => $this->input->post('flight_price'),
 			'flight_time_start' => $this->input->post('flight_time_start'),
 			'flight_time_finish' => $this->input->post('flight_time_finish'),
 			'flight_time_travel' => $this->input->post('flight_time_travel'),
		 	);

		$result = $this->flight->flight_edit($id, $data);
		echo json_encode($result);	



	}
}