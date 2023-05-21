<?Php

class Usuario {

	private $codUsuario;
	private $usuario;
	private $clave;
	private $nombreUsuario;
	private $localidad;
    private $fechaNacimiento;
    private $tipoUsuario;

	
	
	

	function __Construct ($registro){
		
		$this->codUsuario=  $registro['codUsuario'];
		$this->usuario = $registro['usuario'];
		$this->clave = $registro['clave'];
		$this->nombreUsuario = $registro['nombreUsuario'];
		$this->localidad = $registro['localidad'];
        $this->fechaNacimiento = $registro['fechaNacimiento'];
        $this->tipoUsuario = $registro['codTipoUsuario'];
			
	}

	//Getters	
	function getCod(){
		return $this->codUsuario;
	}
	function getUsuario(){
		return $this->usuario;
	}
	function getClave(){
		return $this->clave;
	}
	function getNombre(){
		return $this->nombreUsuario;
	}
	function getLocalidad(){
		return $this->localidad;
	}
	function getFecha(){
		return $this->fechaNacimiento;
	}
    function getTipoUsuario(){
		return $this->tipoUsuario;
	}
	

	

}

?>