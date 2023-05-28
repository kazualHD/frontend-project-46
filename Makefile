install: # install deps
	npm install

link:
	npm link

publish: # publish the project locally
	npm publish --dry-run

lint:
	npm run lint

test-coverage:
	npx jest --coverage
