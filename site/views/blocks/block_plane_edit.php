 <a href="/plane" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Вернуться назад</a>
<div class = "container">
	<div class = "row">
		<div class = "col-lg-4 col-lg-offset-1">
			<form action = "/plane/plane_edit" method="POST" >

				  <input type="text" class="form-control"   value= "plan_id" name = "plan_id">
				  <input type="text" class="form-control"   value= "plane_name" name = "plane_name">
				  <input type="text" class="form-control"   value= "plane_place_comfort" name = "plane_place_comfort">
				  <input type="text" class="form-control"   value= "plane_place_business" name = "plane_place_business">
				  <input type="text" class="form-control"   value= "plane_place_econom" name = "plane_place_econom">

				  <button type="submit" class="btn btn-primary active" name="editPlane">Редактировать</button>
			</form>
				  

			
		</div>
	</div>

</div>