jQuery(function(r){r.colorpicker.parsers["CMYK%"]=function(s){var d=/^cmyk\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*\)$/.exec(s);return d?(new r.colorpicker.Color).setCMYK(d[1]/100,d[2]/100,d[3]/100,d[4]/100):void 0}});