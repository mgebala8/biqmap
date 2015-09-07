function _map(){

  this.list = null; //przechowujemy json z nazwami plików excel do edycji
  this.id = null; //id otwartego pliku

  //sprawdzamy czy już pobraliśmy wszystkie pliki map
  this.check = function(){
    if ( this.list == null ){
      this.get_files();
    }
    else{
      //pokazujemy wszystkie pliki w odpowienim oknie (w zależności od otwartego popupu)
      if(popup.target_name == 'maps') this.show_files();
      if(popup.target_name == 'project-maps') this.project_show_files();
    }
  }

  //Pobieramy wszystkie pliki excela (w przypadku gdy nie zrobiliśmy tego wcześniej)
  this.get_files = function(){
    var th = this;
    $.ajax({
      url: '/rest/map',
      type: 'GET',
      success: function(result) {
        th.list = result; //zapisujemy pliki do zmiennej
        //pokazujemy wszystkie pliki w odpowienim oknie (w zależności od otwartego popupu)
        if(popup.target_name == 'maps') th.show_files();
        if(popup.target_name == 'project-maps') th.project_show_files();
      }
    });
  }

  //funkcja odpowiedzialna za pobranie i wyświetlenie konkretnej mapy
  this.open = function( id ){
    var th = this;

    if( this.id == id ){ //jeśli id są takie same zamykamy panel edycji/dodania mapy
      th.add();
    }
    else{ //jeśli id są różne albo otwieramy mapę po raz pierwszy to wczytujemy nową zawartość

      $.ajax({
        url: '/rest/map/' + id,
        type: 'GET',
        success: function(result) {

          if ( !$('#add_map').is(':visible') ) th.add();
          th.id = id; //przy wyswietlaniu odpowiedniej mapy pobieramy jej id
          $('input[name="name"]').val( result.name );
          $('textarea[name="map_json"]').val( result.map_json );
          $('#add_map #preview_map').html( result.map_json );

        }
      });
    }
  }

  //otwarcie mapy w nowym oknie projektu
  this.open2 = function( id ){
    var th = this;

      $.ajax({
        url: '/rest/map/' + id,
        type: 'GET',
        success: function(result) {
          th.id = id; //przy wyswietlaniu odpowiedniej mapy pobieramy jej id
          console.log('obiekt pobranej mapy: ' + result);
          $('#project-edit .map_window .project').html( result.map_json );
        }
      });
  }

  //funkcja zapisująca nową mapę do bazy danych
  this.save = function(){

    var th = this;

    //sprawdzamy czy jest jakiś otwarty projekt czy dodajemy nową mapę
    if (this.id == null){
      //dodajemy nową mapę
      $.ajax({
        url: '/rest/map/',
        type: 'POST',
        data: {
          'name' : $('#maps input[name="name"]').val(),
          'map_json' : $('#maps textarea[name="map_json"]').val(),
          'authenticity_token' : authenticity_token,
        },
        success: function( result ) {
          th.get_files();
          console.log( 'tworzymy nową mapę' + result )
        },
        error: function( result ){
          console.log( 'tworzymy nową mapę' + result )
        }
      });

    }
    else{
      //aktualizujemy już istniejącą mapę
      var th = this;
      $.ajax({
        url: '/rest/map/' + th.id,
        type: 'PUT',
        data: {
          'name' : $('#maps input[name="name"]').val(),
          'map_json' : $('#maps textarea[name="map_json"]').val(),
          'authenticity_token' : authenticity_token,
        },
        success: function( result ) {
            th.get_files();
          console.log( 'aktualizujemy mapę' + result )
        },
        error: function( result ){
          console.log( 'aktualizujemy mapę' + result )
        }
      });

    }
  }

  //Funkcja odpowiedzialna za usunięcie mapy
  this.delete = function(){

    var th = this;

    $.ajax({
      url: '/rest/map/' + th.id,
      type: 'DELETE',
      data: {
        'authenticity_token' : authenticity_token,
      },
      success: function( result ) {
        th.get_files();
        console.log( 'usuwamy mapę' + result )
      },
      error: function( result ){
        console.log( 'usuwamy mapę' + result )
      }
    });

  }

  //wyświetlenie okna do dodawania nowego pliku
  this.add = function(){

    //resetujemy pole do dodania mapy
    $('#maps input[name="name"]').val('');
    $('#maps textarea[name="map_json"]').val('');

    //wyświetlenie albo ukrycie nowego okna
    if( $('#add_map').is(':visible') ){
      $('#add_map').slideUp(500);
    }
    else{
      $('#add_map').slideDown(500);
    }

  }

  //metoda odpowiedzialna za wyświetlanie wszystkich plików excela
  this.show_files = function(){

    var index = 0;
    var th = this;

    $('#maps .maps_list').html("");
    $.each(this.list,function(index, file){
      $('#maps .maps_list').append('<div class="map" id="' + file.id + '" ><span>' + file.name + '</span></div>');
      $('#maps .maps_list .map:last-child').delay( index*80 ).fadeIn(200);
      th.index = index;
    });

    //dodajemy ikonę - dodaj nowy plik excel
    $('#maps .maps_list').css('background', 'none');
    $('#maps .maps_list').append('<div class="map add"><span>nowy mapa</span></div>');
    $('#maps .maps_list div:last-child').delay(this.index*80).fadeIn(200);

  }

  //metoda odpowiedzialna za wyświetlanie wszystkich plików excela - w projekcie
  this.project_show_files = function(){

    var index = 0;
    var th = this;

    $('#project-maps .maps_list').html("");
    $.each(this.list,function(index, file){

      if(project.map_id == file.id){//jeśli w bazie mamy zaznaczony już  plik mampy to dodajemy do niego obramowanie przy wyświetleniu
        $('#project-maps .maps_list').append('<div class="map" style="border-top:5px solid red" id="' + file.id + '" ><span>' + file.name + '</span></div>');
      }
      else{
        $('#project-maps .maps_list').append('<div class="map" id="' + file.id + '" ><span>' + file.name + '</span></div>');
      }

      $('#project-maps .maps_list .map:last-child').delay( index*80 ).fadeIn(200);
      th.index = index;
    });

    //dodajemy ikonę - dodaj nowy plik excel
    $('#project-maps .maps_list').css('background', 'none');
    $('#project-maps .maps_list').append('<div class="map add"><span>nowy mapa</span></div>');
    $('#project-maps .maps_list div:last-child').delay(this.index*80).fadeIn(200);

  }

}
