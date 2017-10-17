$(document).ready(function() {

	// Open menus
	$(".col1").on("click", function() {
		$("section.jan ul").toggleClass("open");
	});
	$(".col2").on("click", function() {
		$("section.feb ul").toggleClass("open");
	});
	$(".col3").on("click", function() {
		$("section.mar ul").toggleClass("open");
	});
	$(".col4").on("click", function() {
		$("section.apr ul").toggleClass("open");
	});
	$(".col5").on("click", function() {
		$("section.may ul").toggleClass("open");
	});
	$(".col6").on("click", function() {
		$("section.jun ul").toggleClass("open");
	});
	$(".col7").on("click", function() {
		$("section.jul ul").toggleClass("open");
	});

	// Math functions and ifs
	$(".month.jul ul").each(function(index) {

		index++;

		var goal = $(".month.jul ul:nth-of-type(" + index + ") li:nth-child(3)").html();
		var month = $(".month.jul ul:nth-of-type(" + index + ") li:nth-child(4)").html();
		var year = $(".month.jul ul:nth-of-type(" + index + ") li:nth-child(5)").html();

		if ($.isNumeric(goal) && ( $.isNumeric(month) || $.isNumeric(year) ) ) {
			var resultpc = ( month / (goal / 12) ) * 100,
				resultkm = month - ( goal / 12 ),
				resultyearpc = ( year / ( (goal / 12) * 7 ) ) * 100,
				resultyearkm = year - ( ( goal / 12 ) * 7 );

			resultpc = resultpc.toFixed(2);
			resultkm = resultkm.toFixed(2);
			resultyearpc = resultyearpc.toFixed(2);
			resultyearkm = resultyearkm.toFixed(2);

			if (resultpc != 0) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(4)").html(month + " <small>| " + resultpc + " %</small>");
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(4)").attr("title", resultkm + " km");
			}

			if (resultpc >= 100) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("high");
			}
			else if (resultpc >= 70) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("mid");
			}
			else if (resultpc < 70) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("low");
			}

			if (resultyearpc != 0) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(5)").html(year + " <small>| " + resultyearpc + " %</small>");
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(5)").attr("title", resultyearkm + " km");
			}

			if (resultyearpc >= 100) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("high");
			}
			else if (resultyearpc >= 70) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("mid");
			}
			else if (resultyearpc < 70) {
				$(".month.jul ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("low");
			}
		}
	});
	
	$(".month.jun ul").each(function(index) {

		index++;

		var goal = $(".month.jun ul:nth-of-type(" + index + ") li:nth-child(3)").html();
		var month = $(".month.jun ul:nth-of-type(" + index + ") li:nth-child(4)").html();
		var year = $(".month.jun ul:nth-of-type(" + index + ") li:nth-child(5)").html();

		if ($.isNumeric(goal) && ( $.isNumeric(month) || $.isNumeric(year) ) ) {
			var resultpc = ( month / (goal / 12) ) * 100,
				resultkm = month - ( goal / 12 ),
				resultyearpc = ( year / ( (goal / 12) * 6 ) ) * 100,
				resultyearkm = year - ( ( goal / 12 ) * 6 );

			resultpc = resultpc.toFixed(2);
			resultkm = resultkm.toFixed(2);
			resultyearpc = resultyearpc.toFixed(2);
			resultyearkm = resultyearkm.toFixed(2);

			if (resultpc != 0) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(4)").html(month + " <small>| " + resultpc + " %</small>");
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(4)").attr("title", resultkm + " km");
			}

			if (resultpc >= 100) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("high");
			}
			else if (resultpc >= 70) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("mid");
			}
			else if (resultpc < 70) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("low");
			}

			if (resultyearpc != 0) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(5)").html(year + " <small>| " + resultyearpc + " %</small>");
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(5)").attr("title", resultyearkm + " km");
			}

			if (resultyearpc >= 100) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("high");
			}
			else if (resultyearpc >= 70) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("mid");
			}
			else if (resultyearpc < 70) {
				$(".month.jun ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("low");
			}
		}
	});

	$(".month.may ul").each(function(index) {

		index++;

		var goal = $(".month.may ul:nth-of-type(" + index + ") li:nth-child(3)").html();
		var month = $(".month.may ul:nth-of-type(" + index + ") li:nth-child(4)").html();
		var year = $(".month.may ul:nth-of-type(" + index + ") li:nth-child(5)").html();

		if ($.isNumeric(goal) && ( $.isNumeric(month) || $.isNumeric(year) ) ) {
			var resultpc = ( month / (goal / 12) ) * 100,
				resultkm = month - ( goal / 12 ),
				resultyearpc = ( year / ( (goal / 12) * 5 ) ) * 100,
				resultyearkm = year - ( ( goal / 12 ) * 5 );

			resultpc = resultpc.toFixed(2);
			resultkm = resultkm.toFixed(2);
			resultyearpc = resultyearpc.toFixed(2);
			resultyearkm = resultyearkm.toFixed(2);

			if (resultpc != 0) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(4)").html(month + " <small>| " + resultpc + " %</small>");
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(4)").attr("title", resultkm + " km");
			}

			if (resultpc >= 100) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("high");
			}
			else if (resultpc >= 70) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("mid");
			}
			else if (resultpc < 70) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("low");
			}

			if (resultyearpc != 0) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(5)").html(year + " <small>| " + resultyearpc + " %</small>");
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(5)").attr("title", resultyearkm + " km");
			}

			if (resultyearpc >= 100) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("high");
			}
			else if (resultyearpc >= 70) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("mid");
			}
			else if (resultyearpc < 70) {
				$(".month.may ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("low");
			}
		}
	});

	$(".month.apr ul").each(function(index) {

		index++;

		var goal = $(".month.apr ul:nth-of-type(" + index + ") li:nth-child(3)").html();
		var month = $(".month.apr ul:nth-of-type(" + index + ") li:nth-child(4)").html();
		var year = $(".month.apr ul:nth-of-type(" + index + ") li:nth-child(5)").html();

		if ($.isNumeric(goal) && ( $.isNumeric(month) || $.isNumeric(year) ) ) {
			var resultpc = ( month / (goal / 12) ) * 100,
				resultkm = month - ( goal / 12 ),
				resultyearpc = ( year / ( (goal / 12) * 4 ) ) * 100,
				resultyearkm = year - ( ( goal / 12 ) * 4 );

			resultpc = resultpc.toFixed(2);
			resultkm = resultkm.toFixed(2);
			resultyearpc = resultyearpc.toFixed(2);
			resultyearkm = resultyearkm.toFixed(2);

			if (resultpc != 0) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(4)").html(month + " <small>| " + resultpc + " %</small>");
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(4)").attr("title", resultkm + " km");
			}

			if (resultpc >= 100) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("high");
			}
			else if (resultpc >= 70) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("mid");
			}
			else if (resultpc < 70) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("low");
			}

			if (resultyearpc != 0) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(5)").html(year + " <small>| " + resultyearpc + " %</small>");
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(5)").attr("title", resultyearkm + " km");
			}

			if (resultyearpc >= 100) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("high");
			}
			else if (resultyearpc >= 70) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("mid");
			}
			else if (resultyearpc < 70) {
				$(".month.apr ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("low");
			}
		}
	});

	$(".month.mar ul").each(function(index) {

		index++;

		var goal = $(".month.mar ul:nth-of-type(" + index + ") li:nth-child(3)").html();
		var month = $(".month.mar ul:nth-of-type(" + index + ") li:nth-child(4)").html();
		var year = $(".month.mar ul:nth-of-type(" + index + ") li:nth-child(5)").html();

		if ($.isNumeric(goal) && ( $.isNumeric(month) || $.isNumeric(year) ) ) {
			var resultpc = ( month / (goal / 12) ) * 100,
				resultkm = month - ( goal / 12 ),
				resultyearpc = ( year / ( (goal / 12) * 3 ) ) * 100,
				resultyearkm = year - ( ( goal / 12 ) * 3 );

			resultpc = resultpc.toFixed(2);
			resultkm = resultkm.toFixed(2);
			resultyearpc = resultyearpc.toFixed(2);
			resultyearkm = resultyearkm.toFixed(2);

			if (resultpc != 0) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(4)").html(month + " <small>| " + resultpc + " %</small>");
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(4)").attr("title", resultkm + " km");
			}

			if (resultpc >= 100) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("high");
			}
			else if (resultpc >= 70) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("mid");
			}
			else if (resultpc < 70) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("low");
			}

			if (resultyearpc != 0) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(5)").html(year + " <small>| " + resultyearpc + " %</small>");
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(5)").attr("title", resultyearkm + " km");
			}

			if (resultyearpc >= 100) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("high");
			}
			else if (resultyearpc >= 70) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("mid");
			}
			else if (resultyearpc < 70) {
				$(".month.mar ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("low");
			}
		}
	});

	$(".month.feb ul").each(function(index) {

		index++;

		var goal = $(".month.feb ul:nth-of-type(" + index + ") li:nth-child(3)").html();
		var month = $(".month.feb ul:nth-of-type(" + index + ") li:nth-child(4)").html();
		var year = $(".month.feb ul:nth-of-type(" + index + ") li:nth-child(5)").html();

		if ($.isNumeric(goal) && $.isNumeric(month) && $.isNumeric(year)) {
			var resultpc = ( month / (goal / 12) ) * 100,
				resultkm = month - ( goal / 12 ),
				resultyearpc = ( year / ( (goal / 12) * 2 ) ) * 100,
				resultyearkm = year - ( ( goal / 12 ) * 2 );

			resultpc = resultpc.toFixed(2);
			resultkm = resultkm.toFixed(2);
			resultyearpc = resultyearpc.toFixed(2);
			resultyearkm = resultyearkm.toFixed(2);

			$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(4)").html(month + " <small>| " + resultpc + " %</small>");
			$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(4)").attr("title", resultkm + " km");

			if (resultpc >= 100) {
				$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("high");
			}
			else if (resultpc >= 70) {
				$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("mid");
			}
			else if (resultpc < 70) {
				$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("low");
			}

			$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(5)").html(year + " <small>| " + resultyearpc + " %</small>");
			$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(5)").attr("title", resultyearkm + " km");

			if (resultyearpc >= 100) {
				$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("high");
			}
			else if (resultyearpc >= 70) {
				$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("mid");
			}
			else if (resultyearpc < 70) {
				$(".month.feb ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("low");
			}
		}
	});

	$(".month.jan ul").each(function(index) {

		index++;

		var goal = $(".month.jan ul:nth-of-type(" + index + ") li:nth-child(3)").html();
		var month = $(".month.jan ul:nth-of-type(" + index + ") li:nth-child(4)").html();
		var year = $(".month.jan ul:nth-of-type(" + index + ") li:nth-child(5)").html();

		if ($.isNumeric(goal) && $.isNumeric(month) && $.isNumeric(year)) {
			var resultpc = ( month / (goal / 12) ) * 100,
				resultkm = month - ( goal / 12 ),
				resultyearpc = ( year / (goal / 12) ) * 100,
				resultyearkm = year - ( goal / 12 );

			resultpc = resultpc.toFixed(2);
			resultkm = resultkm.toFixed(2);
			resultyearpc = resultyearpc.toFixed(2);
			resultyearkm = resultyearkm.toFixed(2);

			$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(4)").html(month + " <small>| " + resultpc + " %</small>");
			$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(4)").attr("title", resultkm + " km");

			if (resultpc >= 100) {
				$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("high");
			}
			else if (resultpc >= 70) {
				$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("mid");
			}
			else if (resultpc < 70) {
				$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(4) small").addClass("low");
			}

			$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(5)").html(year + " <small>| " + resultyearpc + " %</small>");
			$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(5)").attr("title", resultyearkm + " km");

			if (resultyearpc >= 100) {
				$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("high");
			}
			else if (resultyearpc >= 70) {
				$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("mid");
			}
			else if (resultyearpc < 70) {
				$(".month.jan ul:nth-of-type(" + index + ") li:nth-child(5) small").addClass("low");
			}
		}
	});

});
