$('.J_menuItem').each(function(i, val) {
	$(this).on('click', function() {
		var href = $(this).attr("href");
		$('.J_menuItem').removeClass("active");
		$(this).addClass("active");
		$('#content-main').find("iframe").attr("src", href);
		return false;
	})
})

