//obiekt odpowiedzialny za rejestracje i logowanie użytkownika (zapytania wysyłane ajaxem)
function _user(){

  //LOGOWANIE UŻYTWKONIKA
  this.login = function(){
    //wysyłamy zapytanie ajaxem do serwera
    $.ajax({
      url: '/rest/user/login',
      type: 'POST',
      data: {
        'authenticity_token' : authenticity_token,
        'login' : $('.login input[name=login]').val(),
        'password' : $('.login input[name=password]').val(),
      },
      success: function(result) {
        //w przypadku pojawienia się błędów wyświetlamy komunikat
        if(result.errors){
          var add_text = '<ul class="error"><li>'+result.message+'</li></ul>';
        }
        else{
          var add_text = '<ul><li>'+result.message+'</li></ul>';
          //przekierowanie na inną stronę
          window.setTimeout(function () {location.href = "/edit";}, 1000);
        }

        $('.login .alert').fadeOut(0);
        $('.login .alert').html(add_text);
        $('.login .alert').fadeIn(500);
      }
    });
  }

  //REJESTRACJA NOWEGO UŻYTKOWNIKA
  this.register = function(){
    //wysyłamy zapytanie ajaxem do serwera
    $.ajax({
      url: '/rest/user',
      type: 'POST',
      data: {
        'authenticity_token' : authenticity_token,
        'login' : $('.register input[name=login]').val(),
        'email' : $('.register input[name=email]').val(),
        'password' : $('.register input[name=password]').val(),
      },
      success: function(result) {
        //w zalezności od zwróconego wyniku wyświetlamy odpowiedni komunikat
        if(result.action){
          var add_text = '<ul><li>Dodano nowego użytkownika</li></ul>';
        }
        else{
          var add_text = '<ul class="error">';
          $.each(result.errors, function(index,messages){
            add_text += '<li>' + messages + '</li>'
          });
          add_text += '</ul>';
        }

        //wyświetlamy odpowiedni komunikat
        $('.register .alert').fadeOut(0);
        $('.register .alert').html(add_text);
        $('.register .alert').fadeIn(500);

      }

    });
  }

}
