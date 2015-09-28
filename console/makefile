all: console

test: console cases runTests

console:
	@cat printf/printf.pre.h printf/printf_parseStyle.js printf/printf.js api.js > tmp.js
	@cpp -P tmp.js > console.js
	@uglifyjs console.js > console.min.js
	@rm tmp.js

cases:
	@cat console.js tests/visual.js > tests/visual/cases.js

runTests:
	@./tests/visual/visual
