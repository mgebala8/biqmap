function _user(){this.login=function(){$.ajax({url:"/rest/user/login",type:"POST",data:{authenticity_token:authenticity_token,login:$(".login input[name=login]").val(),password:$(".login input[name=password]").val()},success:function(e){if(e.errors)var t='<ul class="error"><li>'+e.message+"</li></ul>";else{var t="<ul><li>"+e.message+"</li></ul>";window.setTimeout(function(){location.href="/edit"},1e3)}$(".login .alert").fadeOut(0),$(".login .alert").html(t),$(".login .alert").fadeIn(500)}})},this.register=function(){$.ajax({url:"/rest/user",type:"POST",data:{authenticity_token:authenticity_token,login:$(".register input[name=login]").val(),email:$(".register input[name=email]").val(),password:$(".register input[name=password]").val()},success:function(e){if(e.action)var t="<ul><li>Dodano nowego u\u017cytkownika</li></ul>";else{var t='<ul class="error">';$.each(e.errors,function(e,i){t+="<li>"+i+"</li>"}),t+="</ul>"}$(".register .alert").fadeOut(0),$(".register .alert").html(t),$(".register .alert").fadeIn(500)}})}}