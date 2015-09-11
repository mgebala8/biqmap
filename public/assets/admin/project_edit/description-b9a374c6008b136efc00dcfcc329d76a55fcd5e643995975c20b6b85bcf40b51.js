function _description(){

  //lista wszystich opisów
  this.list = Array('');

  //podmiana opisu funkcji
  this.change = function(id, text){
    this.list[id] = text;
  }

  //dodajemy nowy opis do bazy
  this.add = function(text){
    text = text || ''; //jeśli zmienna jest niezdefiniowana ustawiamy pustą zawartość
    this.list.push(text);
  }

  //usuwamy opis o podanym numerze id
  this.remove = function( label_num ){
    this.list.splice(label_num, 1)
  }

}
