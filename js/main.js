$(".icon").before("<span class='node'></span>");

$(function() {
	$("a.icon").hover(
			  function() {
			      var index = $("a.icon").index(this);
			      $(".node:eq("+index+")").css("background-color", "#e6b422");
			  },
			  function() {
			      var index = $("a.icon").index(this);
			      $(".node:eq("+index+")").css("background-color", "#fff");
			  }
	    );
    });