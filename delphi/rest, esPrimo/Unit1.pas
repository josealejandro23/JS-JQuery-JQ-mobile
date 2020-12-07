unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, REST.Types, FireDAC.Stan.Def,
  FireDAC.VCLUI.Wait, FireDAC.Phys.ADSWrapper, FireDAC.Stan.Async,
  FireDAC.Stan.Intf, FireDAC.Phys, FireDAC.Phys.ADS, REST.Client,
  Data.Bind.Components, Data.Bind.ObjectScope, Vcl.StdCtrls, JSON;

type
  TForm1 = class(TForm)
    Memo1: TMemo;
    Label1: TLabel;
    Memo2: TMemo;
    Label2: TLabel;
    Button1: TButton;
    Edit1: TEdit;
    RESTClient1: TRESTClient;
    RESTRequest1: TRESTRequest;
    RESTResponse1: TRESTResponse;
    Button2: TButton;
    procedure Button1Click(Sender: TObject);
    procedure Button2Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}
//Consulta usando los elementos creados en el rest debugger
procedure TForm1.Button1Click(Sender: TObject);
var
res : TJSONObject;
begin
   try
      res := TJSONObject.Create;
      RESTRequest1.Execute;
      memo1.Text := RESTResponse1.Content;
      res := TJSONObject.ParseJSONValue(RESTResponse1.Content) as TJSONObject;
      memo2.Text := res.GetValue<string>('respuesta.primo');
   finally
      FreeAndNil(res);
   end;
end;

//consulta creada a mano
procedure TForm1.Button2Click(Sender: TObject);
var
   cliente : TRESTClient;
   request : TRESTRequest;
   response : TRESTResponse;
   res : TJSONObject;
begin
    cliente := TRESTClient.Create(nil);
    request := TRESTRequest.Create(nil);
    response := TRESTResponse.Create(nil);
   try
      cliente.BaseURL := 'https://sserver.insoft.co/api/EsPrimo';
      request.Client := cliente;
      request.Response := response;

      request.Params.AddItem('Authorization','Basic InSoftPruebas',pkHTTPHEADER,[poDoNotEncode]);
      request.Method := rmPost;
      request.AddBody(format('{"numero":%s}',[edit1.text]),ctAPPLICATION_JSON);
      request.Execute;

      memo1.Text := response.Content;
      res := TJSONObject.ParseJSONValue(response.Content) as TJSONObject;
      memo2.Text := res.GetValue<string>('respuesta.primo');
   finally
      FreeAndNil(cliente);
      FreeAndNil(request);
      FreeAndNil(response);
      FreeAndNil(res);
   end;
end;
procedure TForm1.FormCreate(Sender: TObject);
begin
   ReportMemoryLeaksOnShutdown := true;
end;

end.
