/* jshint unused: false */

function document_createElementHtml()
{
	"use strict";
	var html = {
		innerHTML: ""
	};
	return html;
}

function document_createElement(type)
{
	"use strict";
	var el;
	switch(type) {
	case 'html':
		el = document_createElementHtml();
		break;
	default:
		break;
	}
	return el;
}
/* global document_createElement */

/* jshint ignore:start */
var document = {};
/* jshint ignore:end */

document.createElement = function (type) {
	"use strict";
	return document_createElement(type);
};

