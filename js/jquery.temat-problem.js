jQuery(document).ready(function($) {
	$('.tborder input[name=subject]').keyup(function() {
		var _val = $(this).val();
		var _pokaz = $("input[name=submit].button").attr("disabled", "disabled");$("tr#maszProblem").show();

		if (/pomoc|pytani|problem|pytań| pls| plz| plis|please|help|pomóż|pomoz/ig.test(_val)) {
			_pokaz
			$('span#mPMa').show();
		} else if (/szybko\b|pilne|fast|ważne!|wazne!/ig.test(_val)) {
			_pokaz
			$('span#mPMb').show();
		} else {
			$("input[name=submit].button").removeAttr("disabled");
			$("tr#maszProblem").hide();
			$("span.maszProblemMsg").hide();
		}
	});
});
//|ważne|wazne
//|[ważne]|[wazne]|(ważne)|(wazne)