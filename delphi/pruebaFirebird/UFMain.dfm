object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Form1'
  ClientHeight = 507
  ClientWidth = 659
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object Edit1: TEdit
    Left = 8
    Top = 32
    Width = 320
    Height = 21
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -12
    Font.Name = '@MS Gothic'
    Font.Style = []
    ParentFont = False
    TabOrder = 0
    Text = 'SELECT * FROM USUARIOS'
  end
  object Button1: TButton
    Left = 8
    Top = 59
    Width = 75
    Height = 25
    Caption = 'consultar'
    TabOrder = 1
    OnClick = Button1Click
  end
  object DBGrid1: TDBGrid
    Left = 0
    Top = 256
    Width = 659
    Height = 251
    Align = alBottom
    DataSource = DataSource1
    TabOrder = 2
    TitleFont.Charset = DEFAULT_CHARSET
    TitleFont.Color = clWindowText
    TitleFont.Height = -11
    TitleFont.Name = 'Tahoma'
    TitleFont.Style = []
  end
  object Button2: TButton
    Left = 96
    Top = 59
    Width = 81
    Height = 25
    Caption = 'EXECSQL'
    TabOrder = 3
    OnClick = Button2Click
  end
  object Button3: TButton
    Left = 8
    Top = 120
    Width = 97
    Height = 25
    Caption = 'Crear nueva tabla'
    TabOrder = 4
  end
  object Edit2: TEdit
    Left = 8
    Top = 93
    Width = 129
    Height = 21
    TabOrder = 5
  end
  object Button4: TButton
    Left = 8
    Top = 151
    Width = 75
    Height = 25
    Caption = 'Button4'
    TabOrder = 6
  end
  object FDQuery1: TFDQuery
    Connection = FDConnection1
    SQL.Strings = (
      'select * from usuarios')
    Left = 392
    Top = 24
  end
  object FDConnection1: TFDConnection
    Params.Strings = (
      'Database=EJEMPLO1.FDB'
      'User_Name=sysdba'
      'Password=masterkey'
      'DriverID=FB')
    Left = 296
    Top = 64
  end
  object DataSource1: TDataSource
    DataSet = FDQuery1
    Left = 360
    Top = 72
  end
end
