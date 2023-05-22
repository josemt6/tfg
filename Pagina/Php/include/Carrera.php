<?Php

class Carrera {

	private $codCarrera;
	private $nombre;
	private $localizacion;
	private $fechaCarrera;
	private $estado;
    private $numParticipantes;
    private $maxParticipantes;
    private $longitud;
    private $desnivel;
    private $modoInscripcion;
    private $tipoCarrera;

	
	
	

	function __Construct ($registro){
		
		$this->codCarrera=  $registro['codCarrera'];
		$this->nombre = $registro['nombreCarrera'];
		$this->localizacion = $registro['localizacion'];
		$this->fechaCarrera = $registro['fechaCarrera'];
		$this->estado = $registro['estado'];
        $this->numParticipantes = $registro['numParticipantes'];
        $this->maxParticipantes = $registro['maxParticipantes'];
        $this->longitud = $registro['longitud'];
        $this->desnivel = $registro['desnivel'];
        $this->modoInscripcion = $registro['modoInscripcion'];
        $this->tipoCarrera = $registro['tipoCarrera'];
			
	}

	//Getters	
	function getCod(){
		return $this->codCarrera;
	}
	function getNombre(){
		return $this->nombre;
	}
	function getLocalizacion(){
		return $this->localizacion;
	}
	function getFecha(){
		return $this->fechaCarrera;
	}
	function getEstado(){
		return $this->estado;
	}
	function getNumP(){
		return $this->numParticipantes;
	}
    function getMaxP(){
		return $this->maxParticipantes;
	}
    function getLongitud(){
		return $this->longitud;
	}
    function getDesnivel(){
		return $this->desnivel;
	}
    function getModo(){
		return $this->modoInscripcion;
	}
    function getTipo(){
		return $this->tipoCarrera;
	}
	

	

}

?>