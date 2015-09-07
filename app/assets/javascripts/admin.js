//= require jquery
//= require jquery-ui
//= require ./library/transit
//= require_tree ./admin
//= require_self

var popup = new _popup();
var excel = new _excel();
var upload_file = new _upload_file();
var map = new _map();
var project = new _project();
var helper = new _helper();
var layers = new _layers(); //obiekt przechowujący ilość warstw
var legends = new _legends(); //zarządzanie kolorami
var colorpicker_manager = new _colorpicker_manager();
var description = new _description(); //zbiór wszystkich opisów używanych w dymkach

var gradient = new _gradient();
var label = new _label();

// wyłączenie otwierania przeciąganych elementów w przeglądarce
// zdarzenia nie wymagające wczytania się całej strony
// $(document).on('dragenter', function (e) { upload_file.drop_stop(e) });
// $(document).on('dragover', function (e) { upload_file.drop_stop(e) });
// $(document).on('drop', function (e) { alert('przejeto'); upload_file.drop_stop(e) });
//
// $(document).on('dragenter', '#upload_box', function (e) { upload_file.drop_stop(e) });
// $(document).on('dragover', '#upload_box', function (e) { upload_file.drop_stop(e) });
// $(document).on('drop', '#upload_box', function (e) { upload_file.get_file_drop(e,this); });
// $(document).on('click', '#upload_box', function (e) { $('#file_input').click(); });

$(document).on('change', '#file_input', function (e) { upload_file.get_file(e,this); });

$(document).ready(function(){

  $("*[event='popup']").click(function(){ popup.switch(this); });

  $('#excel .excel_list').on('click', '.file.add', function (e) { $('#file_input').click(); });
  $('#excel .excel_list').on('click', 'div[class="file"]', function (e) { excel.get_file( $(this).attr('id') ); });
  $('#project-excel .excel_list').on('click', 'div[class="file"]', function (e) { project.select_excel( this ) });

  $('#maps .maps_list').on('click', '.map.add', function (e) { map.add(); });
  $('#maps .maps_list').on('click', 'div[class="map"]', function (e) { map.open( $(this).attr('id')) });
  $('#project-maps .maps_list').on('click', 'div[class="map"]', function (e) { project.select_map( this ) });

  //przyciski do przełączania się miedzy oknami
  $('.window .back').click(function(){ popup.switch(this); });
  $('.window .next').click(function(){ popup.switch(this); });
  $('#project-edit .button_excel, #project-edit .button_maps').click(function(){ project.switch_edit(); } );
  $('#project-edit .excel_window').click(function(){ excel.table_reset(); });
  //$('#myElemToClick').ColorPicker();

});

$(document).on('click', '#project-edit td span, #project-edit th span', function(e){ excel.table_change( this ); });
$(document).on('click', '#project-edit .categories .line button.remove', function(e){ project.remove_category_panel( $(this).attr('number') ); });

$(document).on('click', '.map_options button.save',function (e) { map.save() });
$(document).on('click', '.map_options button.delete',function (e) { map.delete() });
$(document).on('click', '#project-edit .categories button.new_category', function (e) { alert(project.categories.length ); project.add_category_panel('kategoria ' + (project.categories.length - 1),'category' + (project.categories.length - 1)); });

$(document).on('click','#project-edit .excel_window .layers_options button.add', function(e){ layers.add(); });
$(document).on('click','#project-edit .excel_window .layers_options button.remove', function(e){ layers.remove(); });

$(document).on('change','#project-edit .excel_window .layers .select_layer', function(e){ layers.select_layer( this ); });
$(document).on('change','#project-edit .excel_window .layers .select_area', function(e){ layers.select_area( this ); });

$(document).on('click','#project-edit .layer select', function(e){ e.stopPropagation(); });

$(document).on('click','#project-edit .layer h2', function(){ console.log('otwieramy zamykamy warstwę: ', $(this).parent() ); layers.switch( $(this).parent() ); });

$(document).on('focusout','#project-edit .layer .edit > textarea', function(e){ description.change( parseInt($(this).parent().parent().attr('layer'))-1, $(this).val() ); });

$(document).on('change','#project-edit .map_window select', function(){ colors.select_number( $(this).val() ); });

$('.excel_list').on('change', 'table tbody tr td .table_input', function (e) { map.open_map( $(this).val() ); });
parent.location.hash = "home";
