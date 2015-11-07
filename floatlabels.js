/*!
 * jQuery Floatlabels plugin
 * Original author: @lollipopfly
 * Further changes, comments: @lollipopfly
 * Licensed under the MIT license
 */

(function( $ ) {
	$.fn.myPlugin = function(options) {

		var settings = $.extend( {
			'color': 'green',
		}, options);

		return this.each(function() {
			$(this).css('color', settings.color);
			// Тут пишем код плагина tooltip

		});
	};
})(jQuery);