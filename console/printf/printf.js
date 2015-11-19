/* global ESCAPE_PREFIX, RESET, printf_parseStyle */
/* jshint unused: false */

function sprintf(fmt)
{
	"use strict";
	var i, j, k, prefix, res, sub, out, offset, sum, exp, style;
	prefix = ESCAPE_PREFIX;
	res = [];
	sub = {
		s: 0,
		e: 0
	};
	j = 0;
	k = 1;
	offset  = 0;
	style = 0;
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
				res[j++] = printf_parseStyle(arguments[k++]);
				sub.s = i + offset;
				style = 1;
				/* }}} */
				break;
			case 's':
				offset++;
				/* string {{{ */
				res[j++] = fmt.substring(sub.s, sub.e);
				res[j++] = arguments[k++];
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
					arguments[k++] * exp
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
				res[j++] = arguments[k++];
				sub.s = i + offset;
				/* }}} */
				break;
			case 'f':
				offset++;
				/* number, syntax sugar for float {{{ */
				res[j++] = fmt.substring(sub.s, sub.e);
				res[j++] = arguments[k++];
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
	res[j++] = arguments[k++];
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

