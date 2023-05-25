
CREATE TABLE Usuario (
  id_usuario INT PRIMARY KEY,
  tipo VARCHAR(20),
  nombre_usuario VARCHAR(50),
  nombre_completo VARCHAR(100),
  fecha_nacimiento DATE,
  contrasena VARCHAR(100),
  localidad VARCHAR(50)
);

-- Creación de la tabla Carrera
CREATE TABLE Carrera (
  id_carrera INT PRIMARY KEY,
  id_organizador INT,
  nombre VARCHAR(100),
  lugar_celebracion VARCHAR(100),
  fecha DATE,
  distancia DECIMAL(10,2),
  desnivel_altura DECIMAL(10,2),
  tipo_carrera VARCHAR(100),
  num_max_participantes INT,
  tipo_inscripcion VARCHAR(100),
  estado VARCHAR(20),
  FOREIGN KEY (id_organizador) REFERENCES Usuario(id_usuario)
);

-- Creación de la tabla TipoCarrera
CREATE TABLE TipoCarrera (
  id_tipo_carrera INT PRIMARY KEY,
  nombre VARCHAR(100)
);

-- Creación de la tabla SolicitudInscripcion
CREATE TABLE SolicitudInscripcion (
  id_solicitud INT PRIMARY KEY,
  id_corredor INT,
  id_carrera INT,
  mensaje_corredor TEXT,
  estado_solicitud VARCHAR(20),
  FOREIGN KEY (id_corredor) REFERENCES Usuario(id_usuario),
  FOREIGN KEY (id_carrera) REFERENCES Carrera(id_carrera)
);

-- Creación de la tabla Dorsal
CREATE TABLE Dorsal (
  id_dorsal INT PRIMARY KEY,
  id_corredor INT,
  id_carrera INT,
  numero INT,
  tiempo TIME,
  FOREIGN KEY (id_corredor) REFERENCES Usuario(id_usuario),
  FOREIGN KEY (id_carrera) REFERENCES Carrera(id_carrera)
);