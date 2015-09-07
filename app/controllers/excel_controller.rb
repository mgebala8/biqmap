class ExcelController < ApplicationController

  #include ExcelHelper
  require 'spreadsheet'
  require 'csv'

  layout false
  before_action :require_login

  #wyświetlenie wszystkich plików excela
  def index
    excels = Excel.select(:id,:name).where( "user_id = ?", session[:user]['id'] )
    render json: excels.to_json
  end

  #wyświetlenie konkretnego pliku excela
  def show
    excels = Excel.select(:id,:excel_json).where("id = ?  AND user_id = ?", params['id'], session[:user]['id'] ).first
    render json: excels.to_json
  end

  #tworzenie nowego pliku excela
  def create
    file = params['file']
    random_name = random_string(20)
    File.open( "public/excel/" + random_name + file.original_filename, "wb" ) { |f| f.write( file.read ) }
    name = "public/excel/" + random_name + file.original_filename
    ext_name = File.extname( name )

    #parsujemy plik excela
    if ext_name == '.csv' #parsowanie w przypadku plików .csv
      workbook = CSV.read(name, { :col_sep => ';', :encoding => 'iso-8859-2:utf-8'})
      workbook = workbook
    else
      workbook = Spreadsheet.open name #parsowanie w przypadku standardowych plików excela .xls .xlsx
      workbook = workbook.worksheets[0]
    end

    #wyswietlamy komunikat zwrotny
    if Excel.create(:excel_json => workbook.to_json, :name => file.original_filename, :user_id => session[:user]['id'])
      render json: {save: true, message: 'zapisano poprawnie plik', callback: 'excel'}
    else
      render json: {save: false, message: 'błąd w zapisie', callback: 'excel'}
    end
  end

  #funkcja zapisująca dane w baziedanych
  def update
    excel = Excel.where( "id = ? AND user_id = ?", params['id'], session[:user]['id'] ).first
    excel.excel_json = params['excel_json']
    #wyswietlamy komunikat zwrotny
    if excel.save
        render json: {save: true, message: 'zaktualizowano wybrany plik excel', callback: 'excel'}
    else
        render json: {save: false, message: 'błąd podczas aktualizacji wybranego pliku excela', callback: 'excel'}
    end
  end

  #funkcja usuwająca wybrany rekord
  def destroy
    excel = Excel.where( "id = ? AND user_id = ?", params['id'], session[:user]['id'] ).first
    #wyswietlamy komunikat zwrotny
    if excel.destroy
      render json: {save: true, message: 'usunięto wybrany plik excela', callback: 'excel'}
    else
      render json: {save: false, message: 'błąd podczas usuwania wybranego pliku excela', callback: 'excel'}
    end
  end

  private
    def require_login
      if !session[:logged]
        render json: "brak dostępu do zasobu - nie jesteś zalogowany"
      end
    end

end
