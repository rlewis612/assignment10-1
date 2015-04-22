(function($, window, document) {

	window.ISS = window.ISS || {};

	ISS.App = {

		init: function() {

			// This is the ISS API endpoint. It does not require any additional parameters.
			this.apiUrl = 'http://api.open-notify.org/iss-now.json';

			// This is the Google Static Maps API endpoint. You'll need to
			// set the correct lat/long values with your AJAX results.
			this.mapUrl = 'https://maps.googleapis.com/maps/api/staticmap?size=640x480&zoom=3&markers=LATITUDE,LONGITUDE';

			this.getAjaxData();

		},

		getAjaxData: function() {
			jQuery.support.cors = true;
			$.ajax({
				url: '',
				dataType: 'jsonp',
				success: $.proxy(this.renderMap, this)
			});

		},

		renderMap: function(data) {
			// Hint: render your Google Static Map here.

		}

	}

	ISS.App.init();

})(jQuery, window, document);