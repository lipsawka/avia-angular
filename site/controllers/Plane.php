<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Plane extends CI_Controller {

	 // Инициализация
    function __construct()
    {
        parent::__construct();
        $this->load->model('Plane_model', 'plane');
    }

	public function index()
	{	
		$id = $this->input->get('id');
		if (is_null($id))
		{
			$plane = $this->plane->get_all();
		}
		else
		{
			$plane = $this->plane->get($id);
		}

		echo json_encode($plane);	

		// $this->load->view('template/header');
		// $this->load->view('blocks/block_plane', $data);
		// $this->load->view('template/footer');
	}

	public function plane_add()
	{		
		//var_dump($_POST);
		$this->load->library('form_validation');


		 	$save_data  = array(
		 			'plane_name' => $this->input->post('plane_name'),
		 			'plane_place_comfort' => $this->input->post('plane_place_comfort'),
		 			'plane_place_business' => $this->input->post('plane_place_business'),
		 			'plane_place_econom' => $this->input->post('plane_place_econom') ,
		 	);
		 	
		 	$result = $this->plane->plane_add($save_data);
			echo json_encode($result);	
		 	//die();
		 

	}


	public function plane_delete(){

			$id = $this->uri->segment(3, 0);
			$result = $this->plane->plane_delete($id);
			echo json_encode($result);	

	}

	public function plane_edit(){

		$id = $this->uri->segment(3, 0);
		$data  = array(
 			'plane_name' => $this->input->post('plane_name'),
 			'plane_place_comfort' => $this->input->post('plane_place_comfort'),
 			'plane_place_business' => $this->input->post('plane_place_business'),
 			'plane_place_econom' => $this->input->post('plane_place_econom') ,
	 	);

		$result = $this->plane->plane_edit($id, $data);
		echo json_encode($result);	

	}
}
