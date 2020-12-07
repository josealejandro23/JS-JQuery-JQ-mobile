/* comandos básicos de sql */

/* crear nueba DB, ubicarse en master, use master */
create database nombre_DB;

/* borrar una DB, use master */
drop database nombre_db

/*Consultar todas las tablas de la base de datos en uso*/
Select name from sysobjects where type='U' 

/* crear una tabla */
create table estudiante(
	id char(8) primary key,  /*la palabra al inicio es el nombre de la columna, en seguida el tipo y longitud de dato admitido */
	nombre varchar(20) not null,
	apellido varchar(20) not null,
	direccion varchar(50),
	nacimiento datetime
);

/*consultar las tablas de una db */
exec sp_tables @table_owner = 'dbo'

/* vincular llaves foráneas */
create table inscripcion(
	id char(8) primary key,
	idmateria char(8) not null,
	idestudiante char(8) not null,
	idprofesor char(8) not null,
	fecha char(8),
	CONSTRAINT fk_materia foreign key (idmateria) references materia(id), /* la llave foranea debe apuntar a la llave primaria de la tabla objetivo */
	CONSTRAINT fk_estudiante foreign key (idestudiante) references estudiante(id), /* idestudiante es la columna que guardará los valores de la llave foranea */
	CONSTRAINT fk_profesor foreign key (idprofesor) references profesor(id)
);

/* Insertar valores en las columnas */
insert into estudiante (id, nombre, apellido, direccion, nacimiento)
values ('01','alejandro', 'vargas', 'piagua', '19960223 12:00:00 AM'); /* Inserta el contenido en values correspondiendo a cada nombre entre paréntesis*/

insert into estudiante values('02', 'jose', 'gutierrez', 'cuatro esquinas', null); /* inserta los valores para cada columna existente, por eso no hace falta indicar las columnas ya que serán todas */

insert into estudiante (id,nombre,apellido) values ('03','mayra','figueroa'); /* inserta datos sol en las columnas indicadas, las columnas no indicadas deben soportar el valor null o generará error */

insert into estudiante    /* se insertan dos registros en una sola orden y de nuevo no se indican las columnas ya que serán afectadas todas las columnas */
values
('04','juan','garcia','cali', '20000423 12:00:00 PM'),
('05','maría','ramirez','popayán', null); 

/* ver x cantidad de registros de una tabla */
select top(5) * from estudiante;

/* eliminar una columna de una tabla */
alter table materia drop column cupo;

/*Añadir llave foranea a tabla ya creada */
ALTER TABLE Inscripcion   /* inscripción es el nombre de la tabla que tendrá la llave primaria */
ADD FOREIGN KEY (IdProfesor) REFERENCES Profesor(Id); /* IdProfesor es el nombre de la columna que guardará los valores de la llave foranea*/

/* actualizar campos de una tabla */
update tabla set columna = 'valor'
where condicion

/* consultar cantidad de registros, count(*) cuenta todos los registros */
select count(columna) from tabla  where condicion

/* sumar los registros de una columna */
select sum(columna) from tabla  where condicion

/* máximo y mínimo de una tabla */
select max(columna) from tabla

select min(columna) from tabla

/* concatenar texto al resultado de la consulta */
select 'texto a concatenar: ' + columna from tabla;

/*poner alias al resultado de una consulta (este cambio solo existe para la consulta y no altera la tabla ni sus columnas) */
select columna as 'alias o titulo de la columna que contiene la respuesta' from tabla;

/* extraer una porción de un string */
select substring('cadena de texto',11,6) /* retorna "texto", 11 es la posición donde inicia el corte y 6 la cantidad de caracteres a tomar*/

/*pasar numero a string */
select str(12345)

/* reemplazar parte o una cadena completa */
select STUFF('vamos a cambiar casa', 17,4,'edificio') /*reemplaza desde el caracter 17, 4 caracteres y reemplaza con la palabra edificio */

/*extraer la longitud de una cadena */
select len('cadena a evaluar'); /*el texto contiene 16 caracteres en este caso*/

/*extrear el caracter correspondiente al código ascii*/
select char(65) /*65 es la letra A*/

/*convertir cadenas a mayúsculas y minúsculas */
select LOWER('ESTE TEXTO ESTARÁ EN MINÚSUCULAS');
select UPPER('este texto pasará a mayúsculas');

/*eliminar espacios a la izq y derecha de una cadena*/
select LTRIM('         se borrarán los espacios a la izq');
select RTRIM('se borrarán los espacios a la derecha        ');

/*buscar cadena y reemplazar las coincidencias */
select REPLACE('vamos a reemplazar CASA por EDIFICIO', 'CASA', 'EDIFICIO');

/*Invertir cadena, pueden ser números también*/
select REVERSE('este texto empezará por el final');

/*buscar el índice donde empieza una coincidencia*/
select PATINDEX('%casa%','buscar donde empieza casa');

/*repetir o multiplicar text n veces */
select REPLICATE(' cadena a repetir',5); /*la cadena se muestra 5 veces */

/*introducir espacios en blanco entre dos cadenas */
select 'cadena uno' + SPACE(10) + 'cadena dos'; /*espace indica el número de espacios a insertar entre ambas cadenas */

/*order by, ordenar una consulta por los valores de sus columnas */
select columna from tabla order by columna por la que queremos ordenar asc
select nombre from estudiante order by edad desc

/*buscar por campos nulos*/
select * from tabla where columna is null; /* retorna los registros que tengan la columna con el valor null*/

/*buscar por valores intermedios*/
select * from tabla where columna between val1 and val2;
select * from libros where precio_compra between 150 and 200;

/*buscar los elementos que tengan coincidencia de texto*/
select * from tabla where columna like '%texto%';
select * from libros where nombre like 'la%'; /*registros que empiezan por "la" */
select * from libros where nombre not like 'la%'; /*registros que no empiezan por "la" */

/*group by sirve para agrupar varios registros por condiciones y es obligatorio usar una función agrupadora como sum min max avg */
/*es obligatorio hacer coincidir los argumentos de la función agrupadora así como el select con el group by */
select columnaa, sum(columna2) from tabla group by columna1 having sum(columna2) condicion
select nombre, AVG(precio_venta) from libros group by nombre having AVG(precio_venta) > 320 

/*redondear valores hacia arriba ceiling, hacia abajo floor*/
select nombre, precio_compra, ceiling(precio_compra) as arriba from libros 

/*trabajar con fechas */
select datepart(hour,getdate());
select datename(month,getdate());
select datediff (day,'1960/09/24', GETDATE());
select day(getdate());

/*obtener los registros evitando valores repetidos*/
select distinct columna from tabla
select distinct nombre from usuarios /*retorna los nombres evitando que aparezcan dos o más veces aquellos repetidos */
select sum(distinct edad) from usuarios /*suma las edades evitando sumar dos veces los valores repetidos*/

/* seleccionar los n primeros elementos */
select top 5 * from usuarios /* seleccionar los 5 primeros elementos */
select top 5 * from usuarios order by id_usuario desc /* seleccionar los últimos 5 elementos */

/* join para hacer consultas de dos tablas simultáneamente, interactua mediante las claves foráneas */
select columna1 from tabla1 join tabla2 on tabla1.PK = tabla2.FK(PK de la tabla1);

select nombre, inscripcion.id from estudiante join inscripcion on estudiante.id = inscripcion.idestudiante;

select  estudiante.id as 'id alummno', estudiante.nombre, estudiante.apellido, inscripcion.id as 'codigo inscripción', 
inscripcion.idprofesor, profesor.nombre as 'nombre profesor', materia.id as 'código de materia', 
materia.nombre as'nombre materia' from estudiante join inscripcion on estudiante.id = inscripcion.idestudiante 
join materia on inscripcion.idmateria = materia.id join profesor on inscripcion.idprofesor = profesor.id

/*left join permite acceder a todos los datos de dos tablas aunque no se cumpla la condicion impuesta para vincularlas */
/*muestra todos los datos de la tabla que esté a la izquierda de la consulta join. solo sirve para dos tablas */
select columna from tabla1 left join tabla2 on tabla1pk = tabla2.fk(pk de la tabla1);

select estudiante.id, estudiante.nombre, estudiante.apellido, inscripcion.id from estudiante
left join inscripcion on estudiante.id = inscripcion.idestudiante /*muestra todos los estudiantes aunque no estén inscritos*/

/*right join permite acceder a todos los datos de dos tablas aunque no se cumpla la condicion impuesta para vincularlas */
/*muestra todos los datos de la tabla que esté a la derecha de la consulta join. solo sirve para dos tablas */
select columna from tabla1 left join tabla2 on tabla1pk = tabla2.fk(pk de la tabla1);

select estudiante.id, estudiante.nombre, estudiante.apellido, inscripcion.id from estudiante
right join inscripcion on estudiante.id = inscripcion.idestudiante /*muestra todos los registros y excluye a los alunos no que no estén inscritos*/

/*Agregar una columna o borrarla */
alter table tabla add nombre-nueva-columna varchar (tipo de dato) 
alter table tabla drop column columna-a-borrar

alter table estudiante add correo varchar(50) /*agrega la columna correo */
alter table estudiante drop column correo   /*elimina la columna correo */

/*columnas con valores calculados, columnas que modifican su valor automáticamente según los valores de otras columnas */
alter table tabla add nombrecolumnacalculada as (operacion) /*añadir una columna calculada a una tabla existente*/

create table salones(   /*crear una tabla con un columna calculada*/
	largo int,
	ancho int,
	area as (largo * ancho) /*columna calculada*/
)

/*borrar tabla completa */
drop table tablaABorrar

/*subconsulta */
select * from estudiante where id = (select id from estudiante where nombre = 'mayra')

/*consultar por valores específicos o negar las consultas de valores específicos, in, not in.
el o los valores deben ir entre paréntesis*/
select * from tabla where columna in (val1,..,valn)
select * from tabla where columna not in (val1...valn);

select * from estudiante where id not in(2,4) /*retorna los id 2 y 4 */
select * from estudiante where id in(2,4) /*retorna todos los id excepto el 2 y el 4 */

/*any permite hacer consulta por el resultado de otras consultas y su lógica se asemeja a in  */ 
select * from estudiante where edad = any (select edad from estudiante) /*selecciona todos los estudiante donde la edad
sea cualquiera que esté dentro de la consulta retornada por el any*/

/*<> all permite hacer consulta excluyendo el resultado de otras consultas y su lógica se asemeja a not in*/
select * from estudiante where edad <> all (select edad from estudiante where nombre = 'mayra')
/*consulta todos los datos excepto los entregados por la consulta all*/

/*GO, se usa para separar grupos de sentencias, debe escribirse solo en una línea*/
create database prueba
go
use prueba
create table tabla /*es necesario el go para poder ejecutar todas las sentencias al mismo tiempo, sino marca error
al intentar acceder a prueba cuando aún no se ha creado.*/

/*Vistas, sirven para crear "tablas" que contienen solamente cierto grupo de datos y son asequibles como una tabla convencional. 
Son muy útiles para permitir el acceso a cierto cantidad de información. El nombre de la vista debe ser diferente de la tabla(s)
de donde extrae sus datos*/
create view nombredelavista as select columnas_de_datos_a_mostrar from tabla

create view vista_estudiantes as  /*la tabla se llamará vista_estudiantes*/
select nombre, apellido, edad from estudiante; /*Contendrá solo los datos especificados en la consulta SQL*/
select * from vista_estudiantes /*Se puede acceder y usar normalmente, a demás si la tabla fuente cambia la tabla de vista también se
modifica automáticamente y visceversa, por lo que si elimino datos de la vista se eliminarán también de la tabla original.*/
/*Los cambios que haga a las vistas afectan a la tabla original*/

sp_helptext vista_estudiantes /*Sentencia para conocer cómo fue creada la vista, riesgo de seguridad porque muestra los campos
y la tabla de donde se extrajo la información*/

/*Para cifrar los datos extraidos en la vista se recurre a la encriptación*/
create view vista_estudiantes with encryption as  /*permite el uso normal de la vista, pero no permite conocer cómo fue creada*/
select nombre, apellido, edad from estudiante
sp_helptext vista_estudiantes  /*indica que los datos están cifrados y no muestra el origen de ellos*/

/*Eliminar una vista*/
drop view nombre_de_la_vista

/*Whit Check Option, este comando obliga a que las ediciones que se hagan sobre una vista deban cumplir la condición impuesta en el
where de la creación de la vista para poder ser añadidas*/
create view nombre_vista as select columnas from tabla_original where _restriccion with check option /*los datos modificados deben cumplir la condición*/
create view mayores as select * from usuarios where edad > 18 with check option /*todos los datos insertados o modificados de la vista deben tener edad > 18 o dará error*/

insert into tabla_hombres values('pepito','pepinpepon','contrasena','registrado',15,'M') /*dará error porque 15<18*/

/*Para modificar una vista y sus datos e incluso el cifrado se usa alter view*/
create view nombre_vista as select columnas from tabla /*se crea la vista, en caso de querer cambiar la estructura de la vista se usa alter view*/
create view nombre_vista as select otras_columnas from tabla where condicion /*se pueden cambiar los campos o incluso anexar condiciones o removerlas*/

/*Case sirve para ejecutar diferentes acciones según el valor de un campo*/
select campos = case campo_a_evaluar   
	when condicion then nuevo_valor_del_campo_evaluado /*condicion*/
	when condicion then nuevo_valor_del_campo_evaluado
	when condicion then nuevo_valor_del_campo_evaluado
end  /*fin del case*/
from tabla

select id_usuario, nombre, usuario, edad = 
case edad /*evaluar campo edad*/
	when 20 then 'veinteañero' /*cuando edad = 20 entonces edad = veinteañero*/
	when 18 then 'adulto'
end
from usuarios

/*IF, ELSE*/
if exists (consulta a verificar)
begin
	sentencias SQL caso positivo
end
else
begin
	sentencias sql caso negativo
end

/*Declarar variables y asignar valores*/
declare @nombreVariable TipoVariable;
set @nombreVariable = valor;

declare @id tinyint;
set @id = 23;

/*Crear procedimientos*/
create procedure nombreProcedimiento as
sentencias SQL a almacenar

exec nombreProcedimiento

drop proc nombreProcedimiento /*Borrar procedimiento*/

create procedure consultarHombres as
begin
	select nombre,usuario, edad from usuarios where sexo = 'M'/*Puedo elegir la información que estará disponible dentro del procedimiento*/
end
exec consultarHombres

/*Procedimientos con valores, funciones*/
create procedure nombreProcedimiento
@parametro1 tipo,   /*Si especifico el valor del parámetro será usado como valor por defecto cuando en la invocación no se pase un valor*/
@parametroN tipo,    /*@parametroN varchar(10) = 'pepito', en este caso si no paso el valor del param se utilizará pepito*/
@parametroSalida tipo output /*Podemos crear una variable que contendrá el resultado de un procedimiento*/
as
consultas que usan los parámetros

exec nombreProcedimiento parametro1, parametroN
/*En caso de tener variable de salida se ejecuta así*/
declare @variableSalida tipo;
exec nombreProcedimiento parametros, @variableSalida output;
select @variableSalida;

create procedure ConsultaMayores
@edad int = 23,
@sexo varchar(10)
with encryption --agrega encriptación al procedimiento
as 
begin
	select * from usuarios where edad >= @edad and sexo = @sexo;
end

exec ConsultaMayores 18,'F' /*En este caso 18 sobreescribe el valor por defecto 23 de @edad*/

/*Ejemplo procedimiento con variables de entrada y salida*/
create procedure promedioEdad 
@sexo varchar(10),
@resultado1 int output,
@resultado2 int output
as
begin
	set @resultado1 = (select avg(edad) from usuarios where sexo = @sexo)
	set @resultado2 = (select sum(edad) from usuarios where sexo = @sexo)
end

declare @res1 int;
declare @res2 int;
exec promedioEdad 'F', @res1 output, @res2 output;
select @res1;
select @res2;
	
/*Return, la sentencia return retorna un valor resultado de un procedimiento e ignora las sentencias posteriores
a ella.*/

create procedure nombreProcedimiento
@entrada1 int,
@entradaN int,
as begin
	if (condición) /*el uso del return tiene más sentido si se usa dentro de una sentencia IF*/
		return valor /*Este valor será la salida del procedimiento, por facilidad es más fácil devolver un valor numérico*/
	sentencias adicionales /*Estas sentencias serán ignoradas si se accede al return previamente*/
end

declare @retorno int; /*Esta variable contendrá el valor del return*/
exce @retorno = nombreProcedimiento val1, valN;
select @retorno

/*Comando de ayuda sp*/
sp_help; /*muestra todos los objetos almacenados en la base de datos*/
sp_helptext nombreObjeto /*muestra los datos del objeto especificado*/
sp_stored_procedures /*muestra todos los procedimientos almecenados y sus detalles*/
sp_depends nombreObjeto /*muestra la relación de un objeto con los demás objetos en la DB*/
sp_depends promedioEdad

/*Triggers, estos disparadores se lanzan automáticamente después de un evento insert, update o delete sobre una tabla,
no pueden ser invocados directamente y no aceptan o devuelven parámetros*/
create trigger nombreTrigger
on nombreTablaAEscuchar
for Evento --update, delete o insert
as
begin
	sentencias
end;

insert into estudiante values (07,'pedro','charal','casadehab',null,34) --esta sentencia invoca al trigger siguiente

create trigger inscribirAlumno  -- se invoca al realizar la sentencia insert anterior
on estudiante
for insert
as
begin
	insert into inscripcion values ('ins06', 10,07,'002',null);
end

/*Habilitar o deshabilitar los triggers, esto permite que funciones o no los triggers*/
alter table tablaDondeActuaElTrigger
enable trigger nombreTrigger  --enable o disable






