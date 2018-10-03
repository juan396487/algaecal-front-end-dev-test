

////////  TAP TO CALL //////

//get json data from API
$.ajax({
	url: " https://www.algaecal.com/wp-json/acf/v3/options/options ",
	dataType: 'json',
	success: function(results){

		// function to generate PST hour
		function getPSTTime(date) {

			//declare date variable with current UTC date value 
			var d = new Date(+date);

			//get UTC time offset
			var hroffset = d.getTimezoneOffset() / 60;

			//subtract offset hours
			d.setUTCHours(d.getUTCHours() - hroffset);

			//declare hours and minutes variables
			var hrs = d.getUTCHours();
			var mins = ('0'+d.getUTCMinutes()).slice(-2);
			
			//combine hours and minutes into military time (format used in API response)
			var curr_time = hrs + '' + mins;

			//return current time
			return (curr_time);
		}


		//initiate date instance
		var today = new Date();

		//get current PST time
		var curr_pst_time = getPSTTime(today);

		//get current day of the week
		var day = today.getUTCDay();

		//get office hours according to day of the week
		var office_open = results.acf['office_hours'][day]['starting_time'];
		var office_close = results.acf['office_hours'][day]['closing_time'];

		//get phone number from object
		var phone = results.acf['default_phone_number'];

		//ifcurrent time is between business hours display tap to call element
		if(curr_pst_time >= office_open  && curr_pst_time < office_close) {
			document.getElementById('call').innerHTML = '<a href="tel:' + phone + '"><div><span id="tap-to-talk">Tap to talk</span> <span id="phone">' + phone + '</span></div><div><img src="img/phone-icon.jpg" /> Speak to our Bone Health Specialists!</div></a>'; 
		}
	}
});







///// SHOW BUNDLE BOXES  /////////

//create video handle
window._wq = window._wq || [];

	_wq.push({ id: '5gpdmwj4ur', onReady: function (video) {
		// show bundle boxes if time is past 2:13 (value decalred as 133 seconds)
		video.bind('crosstime', 133, function () {
			$('.bundle').show();
		});
	}
});