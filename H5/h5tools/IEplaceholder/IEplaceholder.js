(function(win, doc) { //使ie8兼容placeholder
	if(!('placeholder' in doc.createElement('input'))) { //仅在不支持 placeholder 的时候执行
		$('input').val('').each(function() {
			$(this).val($(this).attr('placeholder'));
		});
		$(doc).on('blur', 'input', function() {
			var that = $(this);
			setTimeout(function() {
				(that.val() == '') && that.val(that.attr('placeholder'));
			}, 100);
		}).on('focus', 'input', function() {
			$(this).val('');
		});
	}
})(window, document)