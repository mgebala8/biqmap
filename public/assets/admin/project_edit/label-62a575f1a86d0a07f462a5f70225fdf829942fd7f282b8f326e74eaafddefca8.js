function _label(){

  //lista kolorów
  this.color = Array(); //[numer_mapy][ [tytul],[color hex] ]

  //lista tytułów
  this.description = Array(); //[tytul] tablica z tytułami dla każdej mapy

  //podstawowe palety kolorów
  this.palette = Array(
    Array('#7A9127','#4E6112','#BC935F','#F2E2C4','#8C4D16'),
    Array('#36333D','#C3CDDB','#92A94A','#D8D2AC','#756964'),
    Array('#2C323D','#DA1F2F','#CC0441','#3AB0A4','#FFFFFF')
  );

  //dodajemy nowy rekord do bazy
  this.add = function(){
    this.color.push( Array('kategoria', '#ffffff') );
    this.description.push( 'tytuł' + this.description.length );
  }

  //usuwamy rekord z bazy
  this.remove = function( label_pos ){
    this.color.splice(label_pos, 1);
    this.description.splice(label_pos, 1);
  }

  //generujemy listę tabeli w zależności od wybranej kolumny
  this.generate = function( label_pos, column ){
    var list_name = Array();
    //przelatujemy przez całą tablicę w poszukiwniu unikalnych rekordów
    for(var i = 1; i < excel.parse_file.length; i++){
      if (!this.array_search(list_name, excel.parse_file[i][column])){
        if (excel.parse_file[i][column] != '') this.color.push( Array(excel.parse_file[i][column] ,'#ffffff') );
      }
    }
  }

  //funckja pomocnicza do przeszukiwania tabeli (jeśli dany element znajduje się w tabeli zwraca true jeśli nie false)
  this.array_search = function(arr,str){
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i][0] === str) || (arr[i][0] == "")) {
        return true;
      }
    }
    return false;
  }

  //aktualizujemy wybrany kolor
  this.update_color = function(label_num,color_num,color){
  }

  //funkcja wyświetlająca panel do edycji labeli
  this.show = function(){
  }

}
