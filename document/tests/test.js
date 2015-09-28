var test, result, success, total, SHOW_FAIL_INFO;
test = [];
total   = 0;
success = 0;
SHOW_FAIL_INFO = 1;

/* 0 {{{ */
test.push(
	function () {
		"use strict";
		var res, el;
		res = 0;
		el = document.createElement("html");
		if (el.innerHTML === "") {
			res = 1;
		} 
		return res;
	}
);
/* }}} */

/* 1 {{{ */
test.push(
	function () {
		"use strict";
		var res, el;
		res = 0;
		el = document.createElement("html");
		if (el.innerHTML === "fail") {
			res = 1;
		} 
		return res;
	}
);
/* }}} */

var i;
for (i = 0; i < test.length; i += 1) {
	total++;
        result = test[i]();
	success += result;
	if (!result) {
		if (SHOW_FAIL_INFO) {
			print("case " + i + " failed");
		}
	}
}

if (total > 0) {
	print(((success / total) * 100) + "%");
}
