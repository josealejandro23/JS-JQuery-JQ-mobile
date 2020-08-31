create database escuela

go

use escuela
go

create table estudiante(
	id char(8) primary key,
	nombre varchar(20) not null,
	apellido varchar(20) not null,
	direccion varchar(50),
	nacimineto datetime
);  

create table materia(
	id char(8) primary key,
	nombre varchar(20) not null
);

create table profesor(
	id char(8) primary key,
	nombre varchar(20) not null,
	apellido varchar(20) not null,
	direccion varchar(50),
	nacimiento char(8),
	nivel_academico varchar(20)
);

create table inscripcion(
	id char(8) primary key,
	idmateria char(8) not null,
	idestudiante char(8) not null,
	idprofesor char(8) not null,
	fecha char(8),
	CONSTRAINT fk_materia foreign key (idmateria) references materia(id),
	CONSTRAINT fk_estudiante foreign key (idestudiante) references estudiante(id),
	CONSTRAINT fk_profesor foreign key (idprofesor) references profesor(id)
);