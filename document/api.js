/* global document_createElement */

/* jshint ignore:start */
var document = {};
/* jshint ignore:end */

document.createElement = function (type) {
	"use strict";
	return document_createElement(type);
};

