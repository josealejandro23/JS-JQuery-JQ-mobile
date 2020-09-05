insert into estudiante (id, nombre, apellido, direccion, nacimineto)
values ('01','alejandro', 'vargas', 'piagua', '19960223 12:00:00 AM');

insert into estudiante values('02', 'jose', 'gutierrez', 'cuatro esquinas', null);

insert into estudiante (id,nombre,apellido) values ('03','mayra','figueroa');

insert into estudiante 
values
('04','juan','garcia','cali', '20000423 12:00:00 PM'),
('05','maría','ramirez','popayán', null);

select top(5) * from estudiante

insert into materia values ('10','sql server');

insert into profesor (id, nombre, apellido, direccion, nacimiento, nivel_academico)
values ('001','mauricio', 'ramirez', 'popayán, lacteos', '06/04/85', 'magister');

insert into inscripcion values ('ins01','10','03','001', '05/05/20');

select id, nombre, direccion, nacimineto from estudiante;

select * from estudiante where nombre = 'mayra';

select nombre, apellido, direccion from estudiante where id = 02;

create view vista as select nombre from estudiante 
  
EXEC sp_rename 'estudiante.nacimineto', 'nacimiento', 'COLUMN';  
 
 select COUNT from estudiantes

Select name from sysobjects where type='U' /*Consultar todas las tablas de la base de datos en uso*/

