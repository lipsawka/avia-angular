 <a href="/plane" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Вернуться назад</a>
<div class = "container">
	<div class = "row">
		<div class = "col-lg-4 col-lg-offset-1">
			<form action = "/plane/plane_add" method="POST" >
				  <div class="form-group">
				    <label for="Plane_name">Plane name</label>
				    <input type="text" class="form-control" name="plane_name" placeholder="Entet plane name">
				  </div>
				  <p>type seats</p>
				   <div class="form-group">
				    <input type="text" class="form-control" name="count_seat_type_a" placeholder="Entet count seat type a">
				  </div>
				   <div class="form-group">
				    <input type="text" class="form-control" name="count_seat_type_b" placeholder="Entet count seat type b">
				  </div>
				   <div class="form-group">
				    <input type="text" class="form-control" name="count_seat_type_c" placeholder="Entet count seat type c">
				  </div>

				  <button type="submit" class="btn btn-primary btn-lg active" name="addPlane">Добавить </button>
			</form>
			
		</div>
	</div>

</div>