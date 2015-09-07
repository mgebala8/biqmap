function _excel(){

  this.list = null; //przechowujemy json z nazwami plików excel do edycji
  this.parse_file = null; //zawartość klikniętego pliku już po sparsowaniu jsonem
  this.id = null; //id otwartego pliku

  //sprawdzamy czy już pobraliśmy pliki excela
  this.check = function(){
    if (this.list == null){
      this.get_files();
    }
    else{
      if(popup.target_name == 'excel') this.show_files();
      if(popup.target_name == 'project-excel') this.project_show_files();
    }
  }

  //pobieramy wszystkie pliki excela ( w przypadku gdy nie zrobiliśmy tego wcześniej )
  this.get_files = function(){
    var th = this;
    $.ajax({
      url: '/rest/excel',
      type: 'GET',
      data: {
        'authenticity_token' : authenticity_token,
      },
      success: function(result) {
        th.list = result; //zapisujemy pliki do zmiennej
        if(popup.target_name == 'excel') th.show_files();
        if(popup.target_name == 'project-excel') th.project_show_files();
      }
    });
  }

  //metoda odpowiedzialna za wyświetlanie wszystkich plików excela
  this.show_files = function(){

    var index = 0;
    var th = this;

    $('#excel .excel_list').html("");
    $.each(this.list,function(index, file){
      $('#excel .excel_list').append('<div class="file" id="' + file.id + '" ><span>' + file.name + '</span></div>');
      $('#excel .excel_list .file:last-child').delay( index * 80 ).fadeIn(200);
      th.index = index;
    });

    //dodajemy ikonę - dodaj nowy plik excel
    $('#excel .excel_list').css('background', 'none');
    $('#excel .excel_list').append('<div class="file add"><span>nowy plik</span></div>');
    $('#excel .excel_list div:last-child').delay( this.index * 80 ).fadeIn(200);
  }

  //metoda odpowiedzialna za wyświetlanie wszystkich plików excela w projekcie
  this.project_show_files = function(){

    var index = 0;
    var th = this;

    $('#project-excel .excel_list').html("");
    $.each(this.list,function(index, file){

      //jeśli w bazie mamy zaznaczony już  plik excela to dodajemy do niego obramowanie przy wyświetleniu
      if(project.excel_id == file.id){
        $('#project-excel .excel_list').append('<div class="file" style="border-top:5px solid red" id="' + file.id + '" ><span>' + file.name + '</span></div>');
      }
      else{
        $('#project-excel .excel_list').append('<div class="file" id="' + file.id + '" ><span>' + file.name + '</span></div>');
      }

      $('#project-excel .excel_list .file:last-child').delay( index * 80 ).fadeIn(200);
      th.index = index;
    });

    //dodajemy ikonę - dodaj nowy plik excel
    $('#project-excel .excel_list').css('background', 'none');
    $('#project-excel .excel_list').append('<div class="file add"><span>nowy plik</span></div>');
    $('#project-excel .excel_list div:last-child').delay( this.index * 80 ).fadeIn(200);
  }

  //funckja dopowiedzialna za usuwanie plików excel
  this.delete = function(){
    var th = this;
    $.ajax({
      url: '/rest/excel/' + th.id,
      type: 'DELETE',
      data: {
        'authenticity_token' : authenticity_token,
      },
      success: function( result ) {
        th.get_files(); //pokazujemy wszystkie pliki
      }
    });
  }

  //funckja wyświetlająca tabelę w excelu (po wcześniejszym pobraniu plików z excela)
  this.show_table = function(){
    alert( this.parse_file );
    var table_text = '<button onClick="excel.update()">zapisz zmiany</button><button onClick="excel.delete()">usuń plik</button><button onClick="excel.show_files()">wróć do listy</button><table border="1">';

    //dodanie wiersza nagłówkowego
    var row_text = '<tr>';
    for(var column = 0; column < this.parse_file[0].length; column++){
      row_text += '<th>' + this.parse_file[0][column] + '</th>';
    }
    row_text += '</tr>';
    table_text += row_text;

    //dodanie wszystkich wierszy
    for(var row = 1; row < this.parse_file.length; row++){
      var row_text = '<tr>';
      for(var column = 0; column < this.parse_file[row].length; column++){
        row_text += '<td><input class="table_input" onkeyup="excel.change(this)" type="text" row="' + row + '" column="' + column + '" value="' + this.parse_file[row][column] + '" /></td>';
      }
      row_text += '</tr>';
      table_text += row_text;
    }
    table_text += '</table>';
    $('.excel_list').html(table_text)
  }

  //funckja wyświetlająca tabelę w excelu (po wcześniejszym pobraniu plików z excela)
  this.project_show_table = function(){
    layers.show(); //pokazujemy wszystkie dostępne warstwy
    var table_text = '<table border="1">';

    //dodanie wiersza nagłówkowego
    var row_text = '<tr>';

    for(var column = 0; column < this.parse_file[0].length; column++){
      row_text += '<th><span>' + this.parse_file[0][column] + '</span></th>';
    }
    row_text += '</tr>';
    table_text += row_text;

    //dodanie wszystkich wierszy
    for(var row = 1; row < this.parse_file.length; row++){
      var row_text = '<tr>';
      for(var column = 0; column < this.parse_file[row].length; column++){
        row_text += '<td><span class="table_input" type="text" row="' + row + '" column="' + column + '" value="' + this.parse_file[row][column] + '">'+this.parse_file[row][column]+'</span>';
      }
      row_text += '</tr>';
      table_text += row_text;
    }
    table_text += '</table>';
    $('#project-edit .wrapper .container .excel_window .table').html(table_text)
  }

  //funkcja wysyłająca zapytanie i pobierająca konkretny plik excela
  this.get_file = function(id){

    this.id = id; //zapisujemy hash otwieranego pliku

    //wysyłamy zapytanie ajaxem do serwera
    var th = this;
    $.ajax({
      url: '/rest/excel/' + id,
      type: 'GET',
      data: {
        'authenticity_token' : authenticity_token
      },
      success: function(result) {
        th.set_parse_file( JSON.parse( result.excel_json ) );
        //th.parse_file = JSON.parse( result.excel_json );
        th.show_table(); //funckja wyświetlająca pobraną zawartość tabeli
      }
    });

  }

  //funckja usuwająca puste pola z excela
  this.set_parse_file = function (data){

      //parsujemy plik w poszukiwaniu dziur
      for(var row = 0; row <= data.length; row++){
        for(var col = 0; col < data[1].length; col++){
          try{
            if(typeof data[row][col]== 'undefined') {
              data[row][col] = '';
            }
          }
          catch(e){}
        }
      }

      this.parse_file = data;
  }

    //funkcja wysyłająca zapytanie i pobierająca konkretny plik excela
    this.project_get_file = function(id){
      this.id = id; //zapisujemy hash otwieranego pliku
      //wysyłamy zapytanie ajaxem do serwera
      var th = this;
      $.ajax({
        url: '/rest/excel/' + id,
        type: 'GET',
        data: {
          'authenticity_token' : authenticity_token
        },
        success: function(result) {

          th.set_parse_file( JSON.parse( result.excel_json ) );
          th.project_show_table(); //funckja wyświetlająca pobraną zawartość tabeli
        }
      });

    }

  //metoda resetująca zaznaczone dane w tabeli
  this.table_reset = function( obj ){
    $('.excel_window table tr input').each( function( index, obj ){
      var html = $(obj).val();
      $( obj ).parent().css('background','white');
      $( obj ).parent().html('<span>' + html + '</span>');
    });
  }

  //metoda aktualizująca wartości w tablicy excel
  this.table_change = function(obj){

    //funckja resetująca dane w tabeli
    this.table_reset();
    var html = $( obj ).html();
    var parent = $( obj ).parent();
    $( parent ).html('<input type="text" value="' + html + '"/>');
    $(parent).css('background','blue');
    $(parent).children( 'input' ).focus();

  }

  //funckja zapisująca zmiany do bazy
  this.update = function(){
    var th = this;
    $.ajax({
      url: '/rest/excel/'+th.id,
      type: 'PUT',
      data: {
        'excel_json' : JSON.stringify(th.parse_file),
        'authenticity_token' : authenticity_token,
      },
      success: function( result ) {
        console.log( result )
      },
      error: function( result ){
        console.log( result )
      }
    });
  }
}
