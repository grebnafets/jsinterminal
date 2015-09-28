
var test = [];

test.push(
	function ()
	{
		"use strict";
		console.log(
			"%cyellow%cred%cgreen%cblue%cblack%cwhite%cpurple",
			"color:yellow",
			"color:red",
			"color:green;",
			"color:blue",
			"color:black",
			"color:white",
			"color:purple"
		);
	}
);

test.push(
	function ()
	{
		"use strict";
		console.log(
			"%cyellow%cred%cgreen%cblue%cblack%cwhite%cpurple",
			"background-color:yellow",
			"background-color:red",
			"background-color:green;",
			"background-color:blue",
			"background-color:black",
			"background-color:white",
			"background-color:purple"
		);
	}
);

test.push(
	function ()
	{
		"use strict";
		console.log("%cunsupported", "color:notsupported");
	}		
);
	
test.push(
	function ()
	{
		"use strict";
		console.log("%.2foo", 1.123456789);
		console.log("%.3", 1.123456789);
		console.log("%.4bar", 1.123456789);
		console.log("%.5", 1.123456789);
		console.log("%.6foo", 1.123456789);
		console.log("%.7", 1.123456789);
		console.log("%.8bar", 1.123456789);
		console.log("%.9", 1.1234567891234);
		console.log("%.10foo", 1.1234567891234);
		console.log("%.11", 1.1234567891234);
		console.log("%.12bar", 1.1234567891234);
	}		
);

var i;
for (i = 0; i < test.length; i += 1) {
	test[i]();
}

