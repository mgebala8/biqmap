//klasa odpowiedzialna za wyskakujące elementy w oknie popupu
function _popup() {

  //główne zmienne okna popup
  this.target_name = null; //nazwa klikniętego obiektu
  this.target_obj = null; //kliknięty obiekt
  this.time_open = 200; //czas pokazania / owtarcia
  this.time_close = 200; //czas zamknięcia / ukrycia

  //funkcja przechwytująca kliknięty obiekt i pobierająca nazwe i target celu
  this.open = function( obj ){
    //jeśli obiekt kliknięty jest taki sam jak otwarty
    if( this.target_name == $(obj).attr('target') ){
      console.log('obiekt kliknięty i otwrarty są takie same');
      this.close();
    }
    else{
      console.log('obiekt kliknięty i otwrarty są RÓŻNE');
      //jeśli otwarto już jakiś inny popup wyłączamy go
      if( this.target_obj != null ){
        this.close();
      }
        //pobieramy informacje o obiekcie i jego nazwie
        this.target_name = $(obj).attr('target');
        this.target_obj = $('div.' + this.target_name);

        console.log( this.target_obj );
        //pokazujemy wyskakujący popup
        $(this.target_obj).fadeIn(200);
    }
  }

  //funkcja zamykająca kliknięty obiekt
  this.close = function(){
    $(this.target_obj).fadeOut(200);
    this.target_name = null;
    this.target_obj = null;
  }

}
