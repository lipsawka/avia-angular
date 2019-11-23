<p>Общая страница для самолетов </p>

<a href="/plane/plane_add" class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Добавить самолет</a>

<p>Самолеты, которые есть в нашем ангаре </p>
<? //var_dump($planes);?>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Plane_name</th>
      <th scope="col">Count place_comfort</th>
      <th scope="col">Count place_business</th>
      <th scope="col">Count place_econom</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
  	<? foreach($planes as $plane):?>

	    <tr>
	      <td><?= $plane[0] ?></td>
	      <td><?= $plane[1] ?></td>
	      <td><?= $plane[2] ?></td>
	      <td><?= $plane[3] ?></td>
	      <td><?= $plane[4] ?></td>
	      <td><a href="DELETE/plane_delete/<?=$plane[0]?>" class="btn btn-danger btn-sm" role="button" aria-pressed="true">Delete</a></td>
	      <td><button type="button" class="btn btn-danger btn-sm">Delete</button></td>

	    </tr>
	<? endforeach; ?>

  </tbody>
</table>
