function printfps_warnUnsupported(val)
{
 "use strict";
 var red, end, err, prefix;
 prefix = "\x1b[";
 red = prefix + "3" + "1" + "m";
 end = prefix + "0m";
 err = red + val + " is unsupported, sorry." + end;
 print(err);
}
function printfps_color(col)
{
 "use strict";
 var res, prefix;
        res = "";
 prefix = "\x1b[";
 switch (col.toLowerCase()) {
 case "yellow":
  res = prefix + "3" + "3" + "m";
  break;
 case "red":
  res = prefix + "3" + "1" + "m";
  break;
 case "green":
  res = prefix + "3" + "2" + "m";
  break;
 case "blue":
  res = prefix + "3" + "4" + "m";
  break;
 case "black":
  res = prefix + "3" + "0" + "m";
  break;
 case "white":
  res = prefix + "3" + "7" + "m";
  break;
 case "purple":
  res = prefix + "3" + "5" + "m";
  break;
 case "magneta":
  res = prefix + "3" + "5" + "m";
  break;
 default:
  printfps_warnUnsupported(col);
  break;
 }
 return res;
}
function printfps_background_color(col)
{
 "use strict";
 var prefix, res;
        res = "";
 prefix = "\x1b[";
 switch (col.toLowerCase()) {
 case "yellow":
  res = prefix + "4" + "3" + "m";
  break;
 case "red":
  res = prefix + "4" + "1" + "m";
  break;
 case "green":
  res = prefix + "4" + "2" + "m";
  break;
 case "blue":
  res = prefix + "4" + "4" + "m";
  break;
 case "black":
  res = prefix + "4" + "0" + "m";
  break;
 case "white":
  res = prefix + "4" + "7" + "m";
  break;
 case "purple":
  res = prefix + "4" + "5" + "m";
  break;
 case "magneta":
  res = prefix + "4" + "5" + "m";
  break;
 default:
  printfps_warnUnsupported(col);
  break;
 }
 return res;
}
function printfps_font_weight(val)
{
 "use strict";
 var res, prefix;
        res = "";
 prefix = "\x1b[";
 if (val === "bold") {
  res = prefix + "1m";
 }
 return res;
}
function printf_parseStyle(style)
{
 "use strict";
 var i, j, prefix, tuble, tubles, res;
 prefix = "\x1b[";
 j = 0;
 res = [];
 tubles = style.split(';');
 for (i = 0; i < tubles.length; i += 1) {
  tuble = tubles[i].split(':');
  switch(tuble[0].trim().toLowerCase()) {
  case "color":
   res[j++] = printfps_color(tuble[1].trim());
   break;
  case "font-weight":
   res[j++] = printfps_font_weight(tuble[1].trim());
   break;
  case "background-color":
   res[j++] = printfps_background_color(tuble[1].trim());
   break;
  default:
   break;
  }
 }
 return res.join('');
}
function printf(fmt)
{
 "use strict";
 var i, j, k, prefix, res, sub, out, offset, sum, exp, style;
 prefix = "\x1b[";
 res = [];
 sub = {
  s: 0,
  e: 0
 };
 j = 0;
 k = 1;
 offset = 0;
 style = 0;
 for (i = 0; i < fmt.length; i += 1) {
  offset = 0;
  switch (fmt[i]) {
  case '%':
   offset++;
   switch (fmt[i + offset]) {
   case 'c':
    offset++;
    res[j++] = fmt.substring(sub.s, sub.e);
    res[j++] = printf_parseStyle(arguments[k++]);
    sub.s = i + offset;
    style = 1;
    break;
   case 's':
    offset++;
    res[j++] = fmt.substring(sub.s, sub.e);
    res[j++] = arguments[k++];
    sub.s = i + offset;
    break;
   case '.':
    offset++;
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
    break;
   case 'd':
    offset++;
    res[j++] = fmt.substring(sub.s, sub.e);
    res[j++] = arguments[k++];
    sub.s = i + offset;
    break;
   case 'f':
    offset++;
    res[j++] = fmt.substring(sub.s, sub.e);
    res[j++] = arguments[k++];
    sub.s = i + offset;
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
  res[j++] = prefix + "0m";
  style = 0;
 }
 out = res.join('');
 print(out);
}
var console = {};
console.log = printf;

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

