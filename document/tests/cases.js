function document_createElementHtml()
{
 "use strict";
 var html;
 html = {
  accessKey: "",
  accessKeyLabel: "",
  attributes: {},
  baseURI: "document.pre.js",
  childElementCount: 0,
  childNodes: {},
  children: {},
  className: "",
  clientHeight: 0,
  clientLeft: 0,
  clientTop: 0,
  clientWidth: 0,
  contentEditable: "inherit",
  contextMenu: null,
  dataset: {},
  dir: "",
  draggable: false,
  firstChild: null,
  firstElementChild: null,
  hidden: false,
  id: "",
  innerHTML: "",
  isContentEditable: false,
  itemId: "",
  itemProp: {},
  itemRef: {},
  itemScope: false,
  itemType: {},
  itemValue: null,
  lang: "",
  lastChild: null,
  lastElemntChild: null,
  localName: "html",
  namespaceURI: "",
  nextElementSibling: null,
  nextSibling: null,
  nodeName: "HTML",
  nodeType: 1,
  nodeValue: null,
  offsetHeight: 0,
  offsetLeft: 0,
  offsetParent: 0,
  offsetTop: 0,
  offsetWidth: 0,
  onabort: null,
  onblur: null,
  oncanplay: null,
  oncanplaythrough: null,
  onchange: null,
  onclick: null,
  oncontextmenu: null,
  oncopy: null,
  oncut: null,
  ondbclick: null,
  ondrag: null,
  ondragend: null,
  ondragenter: null,
  ondragleave: null,
  ondragover: null,
  ondragstart: null,
  ondrop: null,
  ondurationchange: null,
  onemptied: null,
  onended: null,
  onerror: null,
  onfocus: null,
  oninput: null,
  oninvalid: null,
  onkeydown: null,
  onkeypress: null,
  onkeyup: null,
  onload: null,
  onloadeddata: null,
  onloadedmetadata: null,
  onloadstart: null,
  onmousedown: null,
  onmouseenter: null,
  onmouseleave: null,
  onmousemove: null,
  onmouseout: null,
  onmouseover: null,
  onmouseup: null,
  onpaste: null,
  onpause: null,
  onplay: null,
  onplaying: null,
  onprogress: null,
  onratechange: null,
  onreset: null,
  onresize: null,
  onscroll: null,
  onseeked: null,
  onseeking: null,
  onselect: null,
  onshow: null,
  onstalled: null,
  onsubmit: null,
  onsuspend: null,
  ontimeupdate: null,
  onvolumechange: null,
  onwaiting: null,
  onwheel: null,
  outerHTML: "<html></html>",
  ownerDocument: null,
  parentElement: null,
  parentNode: null,
  prefix: null,
  previousElementSibling: null,
  previousSibling: null,
  properties: {},
  scrollHeight: 0,
  scrollLeft: 0,
  scrollLeftMax: 0,
  scrollTop: 0,
  scrollWidth: 0,
  spellcheck: false,
  style: {},
  tabindex: -1,
  tagName: "HTML",
  textContent: "",
  title: "",
  version: ""
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
var document = {};
document.createElement = function (type) {
 "use strict";
 return document_createElement(type);
};
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
		if (el.innerHTML === "fail") {
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
		if (el.innerHTML === "") {
			res = 1;
		} 
		return res;
	}
);
/* }}} */

/* 2 {{{ */
test.push(
	function () {
		"use strict";
		var res, el;
		res = 0;
		el = document.createElement("html");
		if (el.tagName === "HTML") {
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
