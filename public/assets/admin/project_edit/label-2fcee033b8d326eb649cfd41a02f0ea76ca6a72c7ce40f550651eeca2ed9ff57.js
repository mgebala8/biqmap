function _label(){this.color=Array(),this.description=Array(),this.palette=Array(Array("#7A9127","#4E6112","#BC935F","#F2E2C4","#8C4D16"),Array("#36333D","#C3CDDB","#92A94A","#D8D2AC","#756964"),Array("#2C323D","#DA1F2F","#CC0441","#3AB0A4","#FFFFFF")),this.add=function(){this.color.push(Array("kategoria","#ffffff")),this.description.push("tytu\u0142"+this.description.length)},this.remove=function(r){this.color.splice(r,1),this.description.splice(r,1)},this.generate=function(r,e){for(var i=Array(),t=1;t<excel.parse_file.length;t++)this.array_search(i,excel.parse_file[t][e])||""!=excel.parse_file[t][e]&&this.color.push(Array(excel.parse_file[t][e],"#ffffff"))},this.array_search=function(r,e){for(var i=0;i<r.length;i++)if(r[i][0]===e||""==r[i][0])return!0;return!1},this.update_color=function(){},this.show=function(){}}