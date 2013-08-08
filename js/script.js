$(document).ready(function(){
	$("textarea").on("focusout", function(){
		var items = $(".item").length,
			done = 0;
		$(".item textarea").each(function(){
			if($(this).val() != '') done++; 
		});
		$(".progress-bar .inner").animate({"width": (done/items)*100 + "%"});
	});
	
	$("label").on("click", function(){
		var input = $(this).prev("input[type=checkbox]");
		input.prop("checked",!input.prop("checked"))
	});
	
	$(".minimize").on("click", function(){
		if($(this).hasClass("down"))
			{
				$(this).removeClass("down").addClass("up").prev(".content").removeClass("minimized").children(".overlay").hide();
			}
		else
			{
				$(this).removeClass("up").addClass("down").prev(".content").addClass("minimized").children(".overlay").show();
			}
		return false;
	});
	
	$("textarea").on("focus", function(){
		if($(this).parent().hasClass("minimized"))
			{
				$(this).parent().next(".minimize").click();
			}
	});
	
	$("input").on("focusout change", function(){
		if(($(this).attr("required") && $(this).val().trim() == '') || ($(this).attr("type") == 'checkbox' && !$(this).is(':checked')))
			{
				if($(this).attr("type") == 'checkbox')
					{
						$(this).parent().next("div.hint").addClass("required").html($(this).data("message"));
					}
				else
					{
						$(this).next("div.hint").addClass("required").html($(this).data("message"));	
					}
			}
		else
			{
				
				if($(this).attr("type") == 'checkbox')
					{
						$(this).parent().next("div.hint.required").empty();
					}
				else
					{
						$(this).next("div.hint.required").empty();
					}
			}
	});
	
	$("select").on("focusout change", function(){
		if($(this).val() == "select")
			{
				$(this).next("div.hint").addClass("required").html($(this).data("message"));
			}
		else
			{
				$(this).next("div.hint.required").empty();
			}
	});
	
	$("input#file").on("change", function(){
		var name = this.value;
		reWin = /.*\\(.*)/;
		var fileTitle = name.replace(reWin, "$1");
		reUnix = /.*\/(.*)/;
		fileTitle = fileTitle.replace(reUnix, "$1");
		$('span#fileName').html(fileTitle);
	});
	
});




