all: document

test: document cases runTests

document:
	@cat createElement.js api.js > document.js
	@uglifyjs document.js > document.min.js
cases:
	@cat document.js tests/test.js > tests/cases.js
runTests:
	@js tests/cases.js
