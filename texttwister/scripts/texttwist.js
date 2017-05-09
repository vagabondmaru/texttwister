var TextTwist = {

	execute : function() {
		// get raw word

		var word = $("input[name=WORD]").val();

		if (word == null) return;

		// twist
		var twisted = this.twist(word);


		// assign to TWISTED field
		$("input[name=TWISTED]").val(twisted);
	},

  twist : function (word) {
		var twisted = '';

		var word_arr = [];
		var curr_letter = '';

		for (var i=0; i<word.length; i++) {
			word_arr[i] = word[i];
		}

		// shuffle the letters
		word_arr.sort(function(a, b){return 0.5 - Math.random()})

		// rebuild the string

		for (var i=0; i<word_arr.length; i++) {
			twisted += word_arr[i];
		}

		return twisted;
	},

	reset : function() {
		 $("input[name=WORD]").val("");
		 $("input[name=TWISTED]").val("");
	}

};