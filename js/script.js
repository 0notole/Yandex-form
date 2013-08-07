$(document).ready(function(){
	$("textarea").on("focusout", function(){
		/*
var text = $(this).val(),
			amount = $(this).data('amount'),
			ratio = 0;
		if(amount == undefined) amount = 512;
		if(text.length >= amount) ratio = 100;
		else ratio = ((text.length / amount) * 100);
		$(this).next().html(ratio.toFixed() + "%");
*/
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
});