install:
	npm install

link:
	npm link

publish: 
	npm publish --dry-run

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
