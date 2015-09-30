all: document

test: document cases runTests

document:
	@cat createElement/createElement.pre.h createElement/createElement.js api.js > document.pre.js
	@cpp -P document.pre.js > document.js
	@rm document.pre.js
	@uglifyjs document.js > document.min.js
cases:
	@cat document.js tests/test.js > tests/cases.js
runTests:
	@js tests/cases.js
