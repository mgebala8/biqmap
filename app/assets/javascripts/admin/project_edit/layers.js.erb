//główny obiekt do crud-u kategorii
function _layers(){

  //główna kolumna zawierająca jednostki administracyjne dla mapy (gminy, powiaty, województwa)
  this.area = null;

  //lista wszystkich warstw (główna tablica)
  //wartsty podstawowe ['nazwa_obszaru','kolumna','numer_opisu','etykieta/legenda','numer_legendy']
  this.list = [['warstwa 0',0,null,null]] //['title'],['position'],['column_id'],['legend_type (label/gradient)'];

  //funkcja pokazująca panel zarządzania warstwami ( wyświetla wszystkie warstwy )
  this.show = function(){

    var th = this;
    var select_html = '';

    select_html += '<div class="layer"><h2><label>Obszar:</label><select class="select_area">';
    select_html += '<option>none</option>';

    //jeśli już jakaś warstwa ma wybraną kolumnę to ją podkreślamy
    for(var column = 0; column < excel.parse_file[0].length; column++){
      if(th.area == column){
        select_html += '<option value="' + column + '" col="' + column + '" selected >' + excel.parse_file[0][column] + '</option>';
      }
      else{
        select_html += '<option value="' + column + '" col="' + column + '">' + excel.parse_file[0][column] + '</option>';
      }
    }

    select_html += '</select></h2></div>';

    //pętla po wszystkich elementach tablicy warstw
    $.each(this.list, function( index , layer ){

      select_html += '<div class="layer" layer="' + index + '"><h2><label>' + layer[0]+ '</label><select layer="' + index + '" class="select_layer">';
      select_html += '<option>none</option>';

      //jeśli już jakaś warstwa ma wybraną kolumnę to ją podkreślamy
      for(var column = 0; column < excel.parse_file[0].length; column++){
        if(layer[0] == column){
          select_html += '<option value="' + column + '" col="' + column + '" selected >' + excel.parse_file[0][column] + '</option>';
        }
        else{
          select_html += '<option value="' + column + '" col="' + column + '">' + excel.parse_file[0][column] + '</option>';
        }
      }

      select_html += '</select></h2>';
      select_html += '<div class="edit"><div class="left"><h3>legenda:</h3><div class="legends"></div></div> <div class="right"><h3>opis dymka:</h3><textarea layer="' + index + '">' + description.list[index-1] + '</textarea></div></div>';
      select_html += '</div>';
    });

    $('#project-edit .layers').html( select_html );
  }

  //dodanie nowej warstwy
  this.add = function(){

    //sprawdzamy czy liczba warstw jest mniejsza od liczby kolumn pliku excel
    this.list.push(['warstwa ' + this.list.length, this.list.length, null, null, null]); //dodajemy nową warstwę

    description.add(); //dodawnie nowego opisu / dymka
    gradient.add(); //dodawanie nowego gradientu do warstwy
    label.add(); //dodawanie nowego labelu

    //wyświetlamy na nową całą listę
    var th = this;

    //alert('skończyłem ukrywanie');
    th.show();

  }

  //przełączanie się między otwarymi oknami przeglądarki
  this.switch = function( obj ){
    if( $(obj).children('.edit').is(':visible') ){
      $(obj).children('.edit').hide(500);
    }
    else{
      $('#project-edit .layer .edit').hide(500);
      $(obj).children('.edit').show(500);
    }
  }

  //usuwanie ostatniej warstwy
  this.remove = function(){
    //jeśli liczba warstw jest większa od 3 podstawowych
    if( this.list.length > 1 ){
      this.list.pop(); //usuwamy ostatni rekord z tablicy
      label.remove( label.color.length );
      gradient.remove( gradient.color.length );
      description.remove( description.list.length );
      this.show(); //wyświetlamy na nowo całą listę
    }
  }

  //wybieramy odpowiendnią strefe
  this.select_area = function(obj){
    this.area = $(obj).val();
  }

  //zmieniamy kolumne dla określonej warstwy
  this.select_layer = function(obj){
    //pobieramy numer warstwy
    var layer_number = $(obj).attr('layer');
    alert( layer_number );
    this.list[ layer_number ][2] = $(obj).val();

    //sprawdzamy czy wybrana wartość jesli liczbą
    if( $.isNumeric( excel.parse_file[1][ $(obj).val() ] ) ){ //jesli tak ustawiamy legende jako podziałke

      //sprawdzamy czy do warstwy jest przyporządkowana jakakolwiek legenda jeśli nie przyporządkowujemy ją
      if(this.list[layer_number][3] == null){
        console.log('gradient - dodawanie');
        gradient.generate( layer_number, $(obj).val() );
        gradient.title[layer_number] = excel.parse_file[0][ $(obj).val() ];
        this.list[layer_number][3] = 'gradient';
      }
      else if(this.list[layer_number][3] == 'label'){
        console.log( 'gradient - zmiana' );
        label.remove( this.list[layer_number][4] ); //jeśli jest przyporządkowany label usuwamy go i dodajemy nową legendę
        gradient.add();
        gradient.update_data( gradient.list.length -1, $(obj).val() );
        this.list[layer_number][4] = gradient.list.length -1;
      }
      else if(this.list[layer_number][3] == 'gradient'){
        console.log('gradient - aktualizacja', this.list[layer_number][4], $(obj).val() );
        gradient.update_data( this.list[layer_number][4], $(obj).val());
      }
      this.list[layer_number][3] = 'gradient'
    }
    else{
      //jeśli nie ustawiamy legende jako etykiete
      //sprawdzamy czy do warstwy jest przyporządkowana jakakolwiek legenda jeśli nie przyporządkowujemy ją
      if(this.list[layer_number][3] == null){
        console.log('label - dodawanie');
        label.add();
        label.update_data( label.list.length -1, $(obj).val() );
        this.list[layer_number][4] = label.list.length -1;
      }
      else if(this.list[layer_number][3] == 'gradient'){
        console.log('label - zmiana');
        gradient.remove( this.list[layer_number][4] ); //jeśli jest przyporządkowany label usuwamy go i dodajemy nową legendę
        label.add();
        label.update_data( label.list.length -1, $(obj).val() );
        this.list[layer_number][4] = label.list.length -1;
      }
      else if(this.list[layer_number][3] == 'label'){
        console.log('label - aktualizacja', this.list[layer_number][4], $(obj).val() );
        label.update_data( this.list[layer_number][4], $(obj).val());
      }

      //jesli tak ustawiamy legende jako podziałke
      this.list[layer_number][3] = 'label'
    }

    console.log('tablica layers: ', this.list);
    console.log('tablica gradient: ', gradient.list);
    console.log('tablica label: ', label.list);

  }
}
