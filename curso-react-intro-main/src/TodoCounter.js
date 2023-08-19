function TodoCounter({ completado, totales }){ 
	return( 
		<h1> 
			Completaste { completado } de { totales } TODOs 
		</h1> 
	); 
}

export { TodoCounter };

