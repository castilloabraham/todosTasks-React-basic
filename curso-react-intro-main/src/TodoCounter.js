import './css/TodoCounter.css';

function TodoCounter({ completado, totales }){ 
	return( 
		<h1 className="TodoCounter"> 
			Completaste { completado } de { totales } TODOs 
		</h1> 
	); 
}

export { TodoCounter };

