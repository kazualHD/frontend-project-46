install: # install deps
	npm ci

link:
	npm link

publish: # publish the project locally
	npm publish --dry-run

lint:
	npm run lint

test-coverage:
	npm run test-coverage
