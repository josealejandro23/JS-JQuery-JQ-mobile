object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 337
  ClientWidth = 574
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  PixelsPerInch = 96
  TextHeight = 13
  object Label1: TLabel
    Left = 24
    Top = 8
    Width = 97
    Height = 13
    Caption = 'Respuesta completa'
  end
  object Label2: TLabel
    Left = 24
    Top = 241
    Width = 45
    Height = 13
    Caption = 'resultado'
  end
  object Memo1: TMemo
    Left = 24
    Top = 51
    Width = 513
    Height = 153
    Lines.Strings = (
      'Memo1')
    TabOrder = 0
  end
  object Memo2: TMemo
    Left = 24
    Top = 260
    Width = 145
    Height = 57
    Lines.Strings = (
      'Memo2')
    TabOrder = 1
  end
  object Button1: TButton
    Left = 192
    Top = 258
    Width = 161
    Height = 25
    Caption = 'hacer consulta, rest debugger'
    TabOrder = 2
    OnClick = Button1Click
  end
  object Edit1: TEdit
    Left = 24
    Top = 210
    Width = 121
    Height = 21
    TabOrder = 3
    Text = '9973'
  end
  object Button2: TButton
    Left = 192
    Top = 210
    Width = 161
    Height = 25
    Caption = 'consulta manual'
    TabOrder = 4
    OnClick = Button2Click
  end
  object RESTClient1: TRESTClient
    Accept = 'application/json, text/plain; q=0.9, text/html;q=0.8,'
    AcceptCharset = 'utf-8, *;q=0.8'
    BaseURL = 'https://sserver.insoft.co/api/EsPrimo'
    ContentType = 'application/json'
    Params = <>
    RaiseExceptionOn500 = False
    Left = 392
    Top = 280
  end
  object RESTRequest1: TRESTRequest
    Client = RESTClient1
    Method = rmPOST
    Params = <
      item
        Kind = pkHTTPHEADER
        Name = 'Authorization'
        Options = [poDoNotEncode]
        Value = 'Basic InSoftPruebas'
      end
      item
        Kind = pkREQUESTBODY
        Name = 'body'
        Options = [poDoNotEncode]
        Value = '{"numero":9973}'
        ContentType = ctAPPLICATION_JSON
      end>
    Response = RESTResponse1
    SynchronizedEvents = False
    Left = 408
    Top = 200
  end
  object RESTResponse1: TRESTResponse
    ContentType = 'application/json'
    Left = 480
    Top = 232
  end
end
