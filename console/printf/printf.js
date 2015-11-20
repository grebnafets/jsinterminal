/* global ESCAPE_PREFIX, RESET, printf_parseStyle */
/* jshint unused: false */

function sprintf(fmt)
{
	"use strict";
	var args, i, j, k, prefix, res, sub, out, offset, sum, exp, style;
	res = [];
	sub = {
		s: 0,
		e: 0
	};
	prefix = ESCAPE_PREFIX;
	j = 0;
	k = 1;
	offset  = 0;
	style = 0;
	if (typeof arguments[1] === "object") {
		args = arguments[1];
		k = 0;
	} else {
		args = arguments;
		k = 1;
	}
	for (i = 0; i < fmt.length; i += 1) {
		offset = 0;
		switch (fmt[i]) {
		case '%':
			offset++;
			switch (fmt[i + offset]) {
			case 'c':
				offset++;
				/* style {{{ */
				res[j++] = fmt.substring(sub.s, sub.e);
				res[j++] = printf_parseStyle(args[k++]);
				sub.s = i + offset;
				style = 1;
				/* }}} */
				break;
			case 's':
				offset++;
				/* string {{{ */
				res[j++] = fmt.substring(sub.s, sub.e);
				res[j++] = args[k++];
				sub.s = i + offset;
				/* }}} */
				break;
			case '.':
				offset++;
				/* round float {{{ */
				/* f is obtional but will be eaten. */
				sum = 0;
				exp = 1;
				while (!isNaN(fmt[i + offset])) {
					if (exp > 100) {
						print("fmt causes overflow");
						return;
					}
					sum *= exp;
					sum += parseInt(fmt[i + offset], 10);
					offset++;
					exp *= 10;
				}
				exp = Math.pow(10, sum);
				res[j++] = fmt.substring(sub.s, sub.e);
				res[j++] = Math.round(
					args[k++] * exp
				) / exp;
				if (fmt[i + offset] === 'f') {
					offset++;
				}
				sub.s = i + offset;
				/* }}} */
				break;
			case 'd':
				offset++;
				/* number {{{ */
				res[j++] = fmt.substring(sub.s, sub.e);
				res[j++] = args[k++];
				sub.s = i + offset;
				/* }}} */
				break;
			case 'f':
				offset++;
				/* number, syntax sugar for float {{{ */
				res[j++] = fmt.substring(sub.s, sub.e);
				res[j++] = args[k++];
				sub.s = i + offset;
				/* }}} */
				break;
			default:
				break;
			}
			break;
		default:
			break;
		}
		sub.e++;
	}
	res[j++] = fmt.substring(sub.s, sub.e);
	res[j++] = args[k++];
	if (style) {
		res[j++] = prefix + RESET;
		style = 0;
	}
	out = res.join('');
	return out;
}

function printf(fmt)
{
	"use strict";
	var res = sprintf.apply(fmt, arguments);
	print(res);
}

/* jshint ignore:start */
if (typeof console !== "undefined") {
	var print = function(msg) {console.log(msg);}
	var printf = function(msg) {
		var args = Array.prototype.slice.call(arguments);
		console.log.apply(console, arguments);
	}
}
/* jshint ignore:end */
