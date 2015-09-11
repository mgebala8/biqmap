//główny obiekt CRUD Projektów
function _project(){

  this.map_id = null; //wybrana mapa
  this.excel_id = null; //wybrane_id
  this.mode_edit = 'excel';
  this.switch_disable = false;


  this.select_map = function( obj ){
    //dodajemy obramowanie i pobieramy id zaznaczonej mapy
    $('.maps_list .map').css('border-top','5px solid rgba(0,0,0,0)');
    $(obj).css('border-top','5px solid red');
    this.map_id  = $(obj).attr('id');

    //odblokowujemy możliwość przejścia dalej (jeśli użytkownik zaznaczył poprawną mapę)
    $('#project-maps button[target="project-excel"]').removeAttr( "disabled" );

    console.log(' zmieniono id mapy: ' +  this.map_id);
  }

  this.select_excel = function( obj ){
    //dodajemy obramowanie i pobieramy id zaznaczonego pliku excel
    $('.excel_list .file').css('border-top','5px solid rgba(0,0,0,0)');
    $(obj).css('border-top','5px solid red');
    this.excel_id  = $(obj).attr('id');

    //odblokowujemy możliwość przejścia dalej (jeśli użytkownik zaznaczył poprawną mapę)
    $('#project-excel button[target="project-edit"]').removeAttr( "disabled" );
    console.log(' zmieniono id excela: ' +  this.excel_id);
  }

  this.switch_edit = function(){
    var th = this;
    if(this.switch_disable == false){
      this.switch_disable = true;
      if(this.mode_edit == 'excel'){
        this.mode_edit = 'map';
        $('#project-edit .wrapper .container .excel_window').css('display','none');
        $('#project-edit .wrapper .container .map_window').fadeIn('slow', function(){ th.switch_disable = false; } );
      }
      else{
        this.mode_edit = 'excel';
        $('#project-edit .wrapper .container .map_window').css('display','none');
        $('#project-edit .wrapper .container .excel_window').fadeIn('slow', function(){ th.switch_disable = false; } );
      }
    }
  }

}
