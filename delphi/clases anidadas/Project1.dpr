program Project1;

{$APPTYPE CONSOLE}

{$R *.res}

uses
  System.SysUtils;

type
  Tconfig = class
  private
    terminos : string;
    verTerminos : boolean;
  public
    function getTerminos:string;
    constructor create(t : string);
  end;

  Ttarea = class
  private
    tNombre : string;
    conf : Tconfig;
  public
    procedure getNombre;
  end;

  constructor Tconfig.create(t: string);
  begin
    terminos := t;
    verTerminos := false;
  end;

  function Tconfig.getTerminos:string;
  begin
    result := terminos;
  end;

  procedure Ttarea.getNombre;
  begin
    writeln(tNombre);
  end;
var
  conf : Tconfig;
  task : Ttarea;
  var terminos, nombre :string;
begin
  terminos := 'Has aceptado los tyc';
  task := Ttarea.Create;

  task.tNombre := 'tarea 1';
  task.conf := Tconfig.create(terminos);
  if task.conf.verTerminos then
    writeln(task.conf.getTerminos);
  if not task.conf.verTerminos then
    writeln('propiedad inasequible');
  task.conf.verTerminos := true;
  task.getNombre;
  if task.conf.verTerminos then
    writeln(task.conf.getTerminos);
  readln;
end.
