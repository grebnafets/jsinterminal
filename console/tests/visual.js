/* global printf */
var test = [];

test.push(
	function ()
	{
		"use strict";
		printf(
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
		printf(
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
		printf("%cunsupported", "color:notsupported");
	}		
);
	
test.push(
	function ()
	{
		"use strict";
		printf("%.2foo", 1.123456789);
		printf("%.3", 1.123456789);
		printf("%.4bar", 1.123456789);
		printf("%.5", 1.123456789);
		printf("%.6foo", 1.123456789);
		printf("%.7", 1.123456789);
		printf("%.8bar", 1.123456789);
		printf("%.9", 1.1234567891234);
		printf("%.10foo", 1.1234567891234);
		printf("%.11", 1.1234567891234);
		printf("%.12bar", 1.1234567891234);
	}		
);

var i;
for (i = 0; i < test.length; i += 1) {
	test[i]();
}

