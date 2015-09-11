//obiekt zawierające wszystkie helpery wykorzystywane w projekcie
function _helper(){

  //generowanie losowego koloru
  this.random_color = function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //sprawdzamy czy w tablicy istnieje element
  this.in_array_exist = function(arr,str) {

    for (var i = 0; i < arr.length; i++) {
      if ((arr[i] === str) || (arr[i] == "")) {
        return true;
      }
    }

    return false;
  }

}
