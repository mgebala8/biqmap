//klasa odpowiedzialna za wyskakujące elementy w oknie popupu
function _popup() {

  //główne zmienne okna popup
  this.target_name = null; //nazwa klikniętego obiektu
  this.target_obj = null; //kliknięty obiekt
  this.time_open = 500; //czas pokazania / owtarcia
  this.time_close = 500; //czas zamknięcia / ukrycia

  //główna funkcja otwierająca zamykająca i przełączająca otwarte okna
  this.switch = function( obj ){

    var target = $(obj).attr('target');
    var th = this;

  //  alert('wczesniej otworzyłem:' + this.target_name + ' | otwietamy:' + target)
    //sprawdzamy czy otwierany obiekt jest już otwarny jeśli tak zamykamy go
    if( this.target_name == target ){

      $( this.target_obj ).fadeOut( this.time_close );
      this.target_name = null;
      this.target_obj = null;
      parent.location.hash = '#home'; //resetowanie adresu url

    }
    else{ //jeśli mamy otworzyć nowe okno

      //sprawdzamy czy target nie jest pusty
      if ( target != 'none' ) {

        if ( this.target_obj == null ) {

          //jeśli nie mamy otwartego okna to tylko otwieramy nowe (bez zamykania innego)
          this.target_name = target; //nazwa klikniętego obiektu
          this.target_obj = $('#' + target ); //kliknięty obiekt
          $( this.target_obj ).fadeIn( this.time_open );

          parent.location.hash = this.target_name; //zmieniamy adres w pasku adresu
          this.callback( this.target_name );   //uruchamiamy callback / triger

        }
        else{

          //jeśli już jakieś okno jest otwarte to zamykamy je i otwieramy nowe
          $( this.target_obj ).fadeOut( this.time_close, function(){

            //pobieramy nowy obiekt do otwarcia
            th.target_name = target; //nazwa klikniętego obiektu
            th.target_obj = $('#' + target ); //kliknięty obiekt

            parent.location.hash = th.target_name; //zmieniamy adres w pasku adresu
            th.callback( th.target_name );   //uruchamiamy callback / triger
            //otwieramy nowe okno
            $( th.target_obj ).fadeIn( th.time_open );
          });
        }

      }
    }
  }

  //funkcja wywowyływana przy otwarciu nowego obiektu
  this.callback = function( name ) {

    switch( name ){

      case 'excel':
        excel.check();
      break;

      case 'maps':
        map.check();
      break;

      case 'projects':
        //pobieramy listę wszystkich projektów - DO ZROBIENIA

        //resetujemy już wybrane mapy i pliki excela (jeśli istnieją) oraz blokujemy buttony (przywracamy domyślne ustawienia)
        project.map_id = null;
        project.excel_id = null;
        $('#project-maps button[target="project-excel"]').attr("disabled" , "disabled");
        $('#project-excel button[target="project-edit"]').attr("disabled" , "disabled");

      break;

      case 'project-maps':
        //pobieramy listę wszystkich map
        map.check();
      break;

      case 'project-excel':
        //pobieramy listę wszystkich plików excel
        excel.check();
      break;

      case 'project-edit':
        //okno edycji projketu
        //alert(project.excel_id )
        excel.project_get_file( project.excel_id );
        map.open2( project.map_id );
        colorpicker_manager.add();
        //excel.project_show_table();
      break;

    }

  }

}
