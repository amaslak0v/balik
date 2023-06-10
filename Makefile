.PHONY: run

run:
	npm run start

local-build:
	docker build . -t balik-test

deploy:
	npm run build
	firebase deploy


