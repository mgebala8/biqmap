/*### MOD UPLOAD ### */


function _upload_file(){

  //przechwycenie i zatrzymanie zdarzenia związanego z drag&drop
  this.drop_stop = function(e){
    e.stopPropagation();
    e.preventDefault();
  }

  //przechwycenie pliku upuszczonego na pole drag&drop
  this.get_file_drop = function(event,obj){
    this.drop_stop(event);
    var file = event.originalEvent.dataTransfer.files[0];
    var url = $(obj).attr('url');
    this.upload(file,url);
  }

  //przechwycenie pliku z inputa formularza (przesłanie pliku przez kliknięcie)
  this.get_file = function(event,obj){
    var file = event.target.files[0];
    var url = $(obj).attr('url');
    this.upload(file,url);
  }

  //wysłanie pliku na serwer
  this.upload = function(file,url){

    var data_form = new FormData();
    data_form.append("file", file);
    data_form.append("authenticity_token",authenticity_token);

    //łata dla przeglądarki microsoftu
  	if (window.XMLHttpRequest){
      xhr = new XMLHttpRequest();
    }
    else{
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    //wysłanie ajaxem za pomocą obiektu XMLHttpRequest
  	var xhr = new XMLHttpRequest();
  	xhr.open('POST', url, true);
  	xhr.onload = function () {
      if (xhr.status === 200) {

        response = JSON.parse( xhr.responseText )

        //wszystko ok plik wysłano poprawnie
        alert(response.callback);

        switch(response.callback){
          case 'excel':
            excel.get_files();
            $('#file_input').val('');
          break;
        }
      }
      else {
        //błąd - status strony jest nie prawdidłowy
      	alert('błąd - podczas wywołania funkcji excela');
        alert(xhr.responseText);
    	}
    };
    //wysłanie pliku
    xhr.send(data_form);
  }

}
