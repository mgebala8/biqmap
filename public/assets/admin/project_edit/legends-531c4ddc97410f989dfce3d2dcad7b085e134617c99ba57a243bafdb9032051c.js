function _legends(){

  //główne tablice agregujące dane dotyczące legent label gradient
  this.label = Array(); //[tytuł],[ ['#fff',title], ['#ggg','title'] ]
  this.gradient = Array(); //[ tytuł, min_value, max_value, [#fff,#ggg,#eee] ]

  //podstawowe palety kolorów
  this.palette = Array(
    Array('#7A9127','#4E6112','#BC935F','#F2E2C4','#8C4D16'),
    Array('#36333D','#C3CDDB','#92A94A','#D8D2AC','#756964'),
    Array('#2C323D','#DA1F2F','#CC0441','#3AB0A4','#FFFFFF')
  );

  //fukncja akutalizująca zawarość label
  this.update_label = function( column ){

    //funkcja działa poprawnie w zakresie -100mln +100mln
    var min = 100000000;
    var max = -100000000;

    for(var i = 1; i < excel.parse_file.length; i++){
      if ( min > excel.parse_file[i][column] ){ min = excel.parse_file[i][column] };
      if ( max < excel.parse_file[i][column] ){ max = excel.parse_file[i][column] };
    }

    alert('wartosc min:' + min + 'wartosc max: ' + max );

  }

  //funckja aktualizująca zawartośc gradientu
  this.update_gradient = function( column ){
    var list_name = Array();

    //przelatujemy przez całą tablicę
    for(var i = 1; i < excel.parse_file.length; i++){

      if ( !helper.in_array_exist(list_name, excel.parse_file[i][column]) ){
        if (excel.parse_file[i][column] != '') list_name.push( excel.parse_file[i][column] );
      }

    }
  }

  this.show_label = function( id ){
    var add_text = '<ul>';

    for(var i = 0; i < this.list_label[id].length; i++){
      add_text += '<li><label>' + this.list_label[id][i][0] + '</label> <div class="colorpicker" color="" style="background-color:' + this.list_label[id][i][1] + '"></div><input type="text" value="' + this.list_label[id][i][2] + '"></li>';
    }

    add_text += '</ul>'
    return add_text;
  }

  this.show_gradient = function(id){
    var add_text = '<ul>';

    for(var i = 0; i < this.list_label[id].length; i++){
      add_text += '<li></li>';
    }

    add_text += '</ul>'
    return add_text;
  }


  //zarządzanie ilością wybranych kolorów
  this.select_number = function( number ){

    //sprawdzamy czy mamy dodać nowe kolory
    //if(number > this.list.length){ }
    //czy odjąć od już istniejących

    //dodajemy odpowienią ilość boxów
    var add_text = '';
    for (i = 0; i < number; i++) {
      add_text += '<div class="colorpicker_box" color=""></div>'
      $('#project-edit .map_window .color_list').append('<div class="colorpicker_box" color=""></div>')
    }

    //funkcja dodająca odpowienie kolory do określonych pól
    $('#project-edit .map_window .color_list').html( add_text );

  }

  this.select_palette = function( number ){

  }
}
