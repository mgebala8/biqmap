//= require jquery
//= require_tree ./home
//= require_self

var popup = new _popup();
var user = new _user();

$(document).ready(function(){

  //powoli pojawiające się logo
  $('.main_logo').fadeIn(4000);

  $("li[event='popup']").click(function(){ popup.open(this); });

  $('.login table input:last-child').keypress(function(e) {
    if(e.which == 13) {
      $(this).parent('td').parent('tr').parent().find('.button').click()
    }
  });

  //funckje odpowiedzialne za pokazywanie i ukrywanie wyskakujących popupów
  $('.login .button').click(function(){ user.login() });
  $('.register .button').click(function(){ user.register() })

});
